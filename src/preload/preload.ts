import * as path from "path";
import { lstatSync } from "fs";
import { readdir, readFile, writeFile } from "fs/promises";
import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import withToc from "@stefanprobst/rehype-extract-toc";
import {
	Field,
	FieldConfig,
	DocsContext,
	isLocale,
	locales,
	Locale,
	LocaleConfig,
} from "../utils/types";
import util from "util";
import { VFile } from "vfile";

console.time("preload");

const absRootPath = path.resolve("../app");
const systemPathLength = path.resolve("../app").split(path.sep).length;

let docsContext: DocsContext = [];
for (const locale of locales) {
	/* get locale absolute paths */
	const absLocalePath = path.resolve(absRootPath, locale);
	const absLocalePathStat = lstatSync(absLocalePath);
	if (absLocalePathStat.isDirectory()) {
		/* read locale config.json */
		const localeConfig: LocaleConfig = JSON.parse(
			await readFile(path.resolve(absLocalePath, "config.json"), "utf-8")
		);
		const localizedFields: Field[] = [];
		for (const field of localeConfig.fields) {
			const absFieldPath = path.resolve(
				absLocalePath,
				field.relativeConfigPath
			);
			let fieldConfig: FieldConfig;
			try {
				fieldConfig = JSON.parse(
					await readFile(
						path.resolve(absFieldPath, "config.json"),
						"utf-8"
					)
				);
			} catch (error) {
				throw new Error(
					`An error occurred while reading field config, path: ${absFieldPath}`
				);
			}
			if (fieldConfig.isVersioned) {
				/* the field is versioned */
				for (const versionCtx of fieldConfig.versions) {
					let absVersionPath: string;
					if (versionCtx.isLatest) {
						absVersionPath = path.resolve(absFieldPath, "latest");
					} else {
						absVersionPath = path.resolve(
							absFieldPath,
							`v${versionCtx.versionCode}`
						);
					}
					for (const item of versionCtx.category) {
						let url;
						let absMdxPath;
						if ("pages" in item) {
							/* is a section */
							const section = item;
							url = `/${absVersionPath
								.split(path.sep)
								.slice(systemPathLength)
								.join(path.posix.sep)}/${section.pageId}`;
							section.url = url;
							absMdxPath = path.resolve(
								absVersionPath,
								section.pageId,
								"page.mdx"
							);
							const compiledMdx = await getCompiledMdx(
								absMdxPath
							);
							const mdxContext = getMdxContext(compiledMdx);
							section.toc = mdxContext.toc;
							section.metadata = mdxContext.metadata;
							for (const page of section.pages) {
								url = `/${absVersionPath
									.split(path.sep)
									.slice(systemPathLength)
									.join(path.posix.sep)}/${section.pageId}/${
									page.pageId
								}`;
								page.url = url;
								absMdxPath = path.resolve(
									absVersionPath,
									section.pageId,
									page.pageId,
									"page.mdx"
								);
								const compiledMdx = await getCompiledMdx(
									absMdxPath
								);
								const mdxContext = getMdxContext(compiledMdx);
								page.toc = mdxContext.toc;
								page.metadata = mdxContext.metadata;
							}
						} else {
							/* is a page */
							const page = item;
							const url = `/${absVersionPath
								.split(path.sep)
								.slice(systemPathLength)
								.join(path.posix.sep)}/${page.pageId}`;
							page.url = url;

							absMdxPath = path.resolve(
								absVersionPath,
								page.pageId,
								"page.mdx"
							);
							const compiledMdx = await getCompiledMdx(
								absMdxPath
							);
							const mdxContext = getMdxContext(compiledMdx);
							page.toc = mdxContext.toc;
							page.metadata = mdxContext.metadata;
						}
					}
				}
			} else {
				/* the field is not versioned */
				for (const versionCtx of fieldConfig.versions) {
					let absVersionPath: string;
					absVersionPath = absFieldPath;
					for (const item of versionCtx.category) {
						let url;
						let absMdxPath;
						if ("pages" in item) {
							/* is a section */
							const section = item;
							url = `/${absVersionPath
								.split(path.sep)
								.slice(systemPathLength)
								.join(path.posix.sep)}/${section.pageId}`;
							section.url = url;
							absMdxPath = path.resolve(
								absVersionPath,
								section.pageId,
								"page.mdx"
							);
							const compiledMdx = await getCompiledMdx(
								absMdxPath
							);
							const mdxContext = getMdxContext(compiledMdx);
							section.toc = mdxContext.toc;
							section.metadata = mdxContext.metadata;
							for (const page of section.pages) {
								url = `/${absVersionPath
									.split(path.sep)
									.slice(systemPathLength)
									.join(path.posix.sep)}/${section.pageId}/${
									page.pageId
								}`;
								page.url = url;
								absMdxPath = path.resolve(
									absVersionPath,
									section.pageId,
									page.pageId,
									"page.mdx"
								);
								const compiledMdx = await getCompiledMdx(
									absMdxPath
								);
								const mdxContext = getMdxContext(compiledMdx);
								page.toc = mdxContext.toc;
								page.metadata = mdxContext.metadata;
							}
						} else {
							/* is a page */
							const page = item;
							const url = `/${absVersionPath
								.split(path.sep)
								.slice(systemPathLength)
								.join(path.posix.sep)}/${page.pageId}`;
							page.url = url;

							absMdxPath = path.resolve(
								absVersionPath,
								page.pageId,
								"page.mdx"
							);
							const compiledMdx = await getCompiledMdx(
								absMdxPath
							);
							const mdxContext = getMdxContext(compiledMdx);
							page.toc = mdxContext.toc;
							page.metadata = mdxContext.metadata;
						}
					}
				}
			}

			localizedFields.push({
				fieldId: field.fieldId,
				fieldName: fieldConfig.fieldName,
				homeUrl: fieldConfig.homeUrl,
				isVersioned: fieldConfig.isVersioned,
				type: fieldConfig.type,
				versions: fieldConfig.versions,
			});
		}
		docsContext.push({ locale: locale, localizedFields: localizedFields });
	} else {
		throw new Error(`Locale should be a directory, locale: ${locale}`);
	}
}

await writeFile("./docsContext.json", JSON.stringify(docsContext, null, "\t"));

console.timeEnd("preload");

async function getCompiledMdx(absMdxPath: string) {
	const content = await readFile(absMdxPath, "utf-8");
	const compiled = await compile(content, {
		remarkPlugins: [remarkGfm, remarkMath],
		rehypePlugins: [rehypeKatex, rehypeSlug, withToc],
		providerImportSource: "@mdx-js/react",
	});
	return compiled;
}

function getMdxContext(compiledMdx: VFile) {
	const { data, value } = compiledMdx;
	const startingIndex = (value as string).indexOf("const metadata = {");
	const endingIndex = (value as string).indexOf("};", startingIndex);
	const metaString = (value as string)
		.slice(startingIndex + 17, endingIndex + 1)
		.replaceAll("\n", "");
	const metadata = eval(`const metadata = ${metaString};metadata;`);
	const { toc } = data;
	return { metadata, toc } as any;
}
