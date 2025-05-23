import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import createNextIntlPlugin from "next-intl/plugin";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* Configure `pageExtensions` to include MDX files */
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withNextIntl = createNextIntlPlugin();
const withNextIntlConfig = withNextIntl(nextConfig);

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		/** If you use remark-gfm, you'll need to use next.config.mjs
		 * as the package is ESM only
		 * https://github.com/remarkjs/remark-gfm#install
		 */
		remarkPlugins: [remarkGfm, remarkMath],
		rehypePlugins: [rehypeKatex, rehypeSlug, rehypeAutolinkHeadings],
	},
});

const withMDXConfig = withMDX(withNextIntlConfig);

export default withMDXConfig;
