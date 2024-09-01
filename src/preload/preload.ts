import * as path from "path";
import { lstatSync } from "fs";
import { access, lstat, readdir, readFile, writeFile } from "fs/promises";
import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import withToc from "@stefanprobst/rehype-extract-toc";
import util from "util";
import { Locale, locales } from "../utils/types";

console.time("preload");

/* Get all locale absolute paths */
const absRootPath = path.resolve("../app");
const rootItems = await readdir(absRootPath);
const absLocalePaths: string[] = [];

for (const item of rootItems) {
	const absItemPath = path.resolve(absRootPath, item);
	const absItemPathStat = await lstat(absItemPath);
	if (locales.includes(item as Locale) && absItemPathStat.isDirectory()) {
		/* item is a locale directory */
		absLocalePaths.push(absItemPath);
	} else {
		continue;
	}
}

/* Get all versioned doc paths */
let docsContext: any = [];
for (const absLocalePath of absLocalePaths) {
	const urlLocale = path.basename(absLocalePath);
	docsContext.push({ locale: urlLocale, localizedDocInstances: [] });
	let itemsInLocaleFolder = await readdir(absLocalePath);
	const docInstances = itemsInLocaleFolder.filter(async (item) => {
		const absLocalePathState = await lstat(
			path.resolve(absLocalePath, item)
		);
		if (absLocalePathState.isDirectory()) {
			return true;
		} else {
			return false;
		}
	});
	const orderedDocInstanceIdList = JSON.parse(
		await readFile(path.resolve(absLocalePath, "config.json"), "utf-8")
	);
	const orderedDocInstances = [];
	for (const instanceId of orderedDocInstanceIdList) {
		for (const docInstance of docInstances) {
			if (docInstance === instanceId) {
				orderedDocInstances.push(docInstance);
			}
		}
	}

	for (const docInstance of orderedDocInstances) {
		const localizedContext = getLocalizedContext(docsContext, urlLocale);
		localizedContext.localizedDocInstances.push({
			docInstance: docInstance,
		});
		const absDocInstancePath = path.resolve(absLocalePath, docInstance);
		const docInstanceStat = await lstat(absDocInstancePath);
		if (docInstanceStat.isDirectory()) {
			const config = JSON.parse(
				await readFile(
					path.resolve(absDocInstancePath, "config.json"),
					"utf-8"
				)
			);
			const docInstanceContext = getDocInstanceContext(
				localizedContext.localizedDocInstances,
				docInstance
			);
			docInstanceContext.docInstanceName = config.docInstanceName;
			let items = await readdir(absDocInstancePath);
			/* Check whether there is a "latest" directory */
			if (config.isVersioned === true) {
				/* Is versioned */
				docInstanceContext.isVersioned = true;
				docInstanceContext.versionedContexts = config.versionedContexts;
				for (const item of items) {
					if (item !== "config.json") {
						/* Is a version directory */
						const absVersionedPath = path.resolve(
							absDocInstancePath,
							item
						);
						const systemPathLength = path
							.resolve("../app")
							.split(path.sep).length;
						const versionedContext = getVersionedContext(
							docInstanceContext.versionedContexts,
							item
						);
						for (const pageContext of versionedContext.pagesContext) {
							let urlPath;
							let absPagePath;
							if (pageContext.subItems) {
								/* Is a category */
								urlPath = `/${absVersionedPath
									.split(path.sep)
									.slice(systemPathLength)
									.join(path.posix.sep)}/${pageContext.item}`;
								pageContext.path = urlPath;
								absPagePath = path.resolve(
									absVersionedPath,
									pageContext.item,
									"page.mdx"
								);
								const toc = await getTocContext(absPagePath);
								pageContext.toc = toc;
								for (const subPageContext of pageContext.subItems) {
									urlPath = `/${absVersionedPath
										.split(path.sep)
										.slice(systemPathLength)
										.join(path.posix.sep)}/${
										pageContext.item
									}/${subPageContext.item}`;
									subPageContext.path = urlPath;
									absPagePath = path.resolve(
										absVersionedPath,
										pageContext.item,
										subPageContext.item,
										"page.mdx"
									);
									const toc = await getTocContext(
										absPagePath
									);
									subPageContext.toc = toc;
								}
							} else {
								/* Is a page */
								urlPath = `/${absVersionedPath
									.split(path.sep)
									.slice(systemPathLength)
									.join(path.posix.sep)}/${pageContext.item}`;
								pageContext.path = urlPath;
								absPagePath = path.resolve(
									absVersionedPath,
									pageContext.item,
									"page.mdx"
								);
								const toc = await getTocContext(absPagePath);
								pageContext.toc = toc;
							}
						}
					}
				}
			} else {
				/* Not versioned */
				docInstanceContext.isVersioned = false;
				docInstanceContext.versionedContexts = config.versionedContexts;
				for (const item of items) {
					if (item === "latest") {
						/* Only parse the "latest" directory */
						const absVersionedPath = path.resolve(
							absDocInstancePath,
							item
						);
						const systemPathLength = path
							.resolve("../app")
							.split(path.sep).length;
						const versionedContext = getVersionedContext(
							docInstanceContext.versionedContexts,
							item
						);
						for (const pageContext of versionedContext.pagesContext) {
							let urlPath;
							let absPagePath;
							if (pageContext.subItems) {
								/* Is a category */
								urlPath = `/${absVersionedPath
									.split(path.sep)
									.slice(systemPathLength)
									.join(path.posix.sep)}/${pageContext.item}`;
								pageContext.path = urlPath;
								absPagePath = path.resolve(
									absVersionedPath,
									pageContext.item,
									"page.mdx"
								);
								const toc = await getTocContext(absPagePath);
								pageContext.toc = toc;
								for (const subPageContext of pageContext.subItems) {
									urlPath = `/${absVersionedPath
										.split(path.sep)
										.slice(systemPathLength)
										.join(path.posix.sep)}/${
										pageContext.item
									}/${subPageContext.item}`;
									subPageContext.path = urlPath;
									absPagePath = path.resolve(
										absVersionedPath,
										pageContext.item,
										subPageContext.item,
										"page.mdx"
									);
									const toc = await getTocContext(
										absPagePath
									);
									subPageContext.toc = toc;
								}
							} else {
								/* Is a page */
								urlPath = `/${absVersionedPath
									.split(path.sep)
									.slice(systemPathLength)
									.join(path.posix.sep)}/${pageContext.item}`;
								pageContext.path = urlPath;
								absPagePath = path.resolve(
									absVersionedPath,
									pageContext.item,
									"page.mdx"
								);
								const toc = await getTocContext(absPagePath);
								pageContext.toc = toc;
							}
						}
					}
				}
			}
		} else {
			const error = new Error(
				`Doc instance is not a directory, path: ${path.resolve(
					absLocalePath,
					docInstance
				)}`
			);
			throw error;
		}
	}
}

await writeFile("./docsContext.json", JSON.stringify(docsContext, null, "\t"));

console.timeEnd("preload");

/**
 * Returns localized context
 * @param docsContext full docsContext that contains multiple locales
 * @param targetUrlLocale target url locale, ex. "en-US"
 * @returns localized context
 */
function getLocalizedContext(docsContext: any, targetUrlLocale: string) {
	return docsContext.find((context: any) => {
		return context.locale === targetUrlLocale;
	});
}

/**
 * Returns a doc instance context
 * @param localizedDocInstanceContexts localized context that contains multiple doc instances
 * @param targetDocInstance target doc instance, ex. "chitubox-basic"
 * @returns doc instance context
 */
function getDocInstanceContext(
	localizedDocInstanceContexts: any,
	targetDocInstance: string
) {
	return localizedDocInstanceContexts.find((docInstance: any) => {
		return docInstance.docInstance === targetDocInstance;
	});
}

/**
 * Returns a versioned doc context
 * @param docInstanceContext doc instance that contains multiple versions
 * @param targetVersionCode target version code, ex. "latest", "v1.3.0"
 * @returns versioned doc context
 */
function getVersionedContext(
	docInstanceContext: any,
	targetVersionCode: string
) {
	return docInstanceContext.find((versionedContext: any) => {
		return versionedContext.versionCode === targetVersionCode;
	});
}

function getPageContext(versionedContext: any, item: string) {
	return versionedContext.find((pageContext: any) => {
		return pageContext.item === item;
	});
}

async function getTocContext(absPagePath: string) {
	const content = await readFile(absPagePath, "utf-8");
	const compiled = await compile(content, {
		remarkPlugins: [remarkGfm, remarkMath],
		rehypePlugins: [rehypeKatex, rehypeSlug, withToc],
		providerImportSource: "@mdx-js/react",
	});
	return compiled.data.toc;
}

async function recurseVersionedPath(absPath: string, pagesContext: any) {
	const items = await readdir(absPath);
	for (const item of items) {
		const absItempath = path.resolve(absPath, item);
		const itemStat = await lstat(absItempath);
		if (itemStat.isDirectory()) {
			pagesContext.push({ type: "category" });
			await recurseVersionedPath(absItempath, pagesContext);
		} else {
			pagesContext.push({ type: "doc" });
		}
	}
}
