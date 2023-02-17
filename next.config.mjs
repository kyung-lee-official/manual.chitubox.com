import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** 
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
	compiler: {
		styledComponents: true
	},
	reactStrictMode: true,
	swcMinify: true,
	// i18n: {
	// 	locales: ['en-US', 'zh-CN'],
	// 	defaultLocale: 'en-US',
	// },
	/* Append the default value with md extensions */
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		/** If you use remark-gfm, you'll need to use next.config.mjs
		 * as the package is ESM only
		 * https://github.com/remarkjs/remark-gfm#install 
		 */
		remarkPlugins: [remarkGfm, remarkMath],
		rehypePlugins: [rehypeKatex, rehypeSlug, rehypeAutolinkHeadings],
		/**
		 * If you use `MDXProvider`, uncomment the following line.
		 */
		providerImportSource: "@mdx-js/react",
	},
});

export default withMDX(nextConfig);
