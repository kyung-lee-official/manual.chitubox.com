import { Image } from "antd";
import React from "react";
import { BilibiliVideoContainer } from "../videoContainer/BilibiliVideoContainer";
import { YouTubeVideoContainer } from "../videoContainer/YouTubeVideoContainer";
import Link from "next/link";
import { ResponsiveTable } from "../responsiveTable/ResponsiveTable";
import { Admonition } from "../admonition/Admonition";
import { ImageComparison } from "../imageComparison/ImageComparison";
import { ImageContainer } from "../imageContainer/ImageContainer";
import dynamic from "next/dynamic";

const DynamicFacebookVideoContainer = dynamic(
	() => import("@/components/videoContainer/FacebookVideoContainer"),
	{
		ssr: false,
	}
);

const DynamicStyledPre = dynamic(
	() => import("@/components/styledPre/StyledPre"),
	{
		ssr: false,
	}
);

const HeadingAnchor = (props: any) => {
	const { children, ...rest } = props;
	return (
		<a
			{...rest}
			className="flex justify-center items-center no-underline opacity-20"
		>
			{children}
		</a>
	);
};

const SpanText: React.FC<any> = (props) => {
	const { children } = props;
	return <p>{children}</p>;
};

const SpanA: React.FC<any> = (props) => {
	const { children, href } = props;
	return (
		<a
			href={href}
			target="_blank"
			className="text-blue-500 dark:text-sky-400 font-medium">
			{children}
		</a>
	);
};

const NextLink: React.FC<any> = (props) => {
	const { children, href } = props;
	return (
		<Link
			href={href}
			className="text-blue-500 dark:text-sky-400 font-medium"
		>
			{children}
		</Link>
	);
};

const Blockquote: React.FC<any> = (props) => {
	const { children } = props;
	return (
		<blockquote
			className="pl-4 border-l-4 my-4
            text-gray-400
            border-l-gray-400"
		>
			{children}
		</blockquote>
	);
};

const InlineCode = (props: any) => {
	const { children } = props;
	return (
		<code className="px-1 border-2 rounded border-gray-400">
			{children}
		</code>
	);
};

const AntdImage: React.FC<any> = (props) => {
	return <Image {...props} alt="" className="m-auto rounded-lg" />;
};

export const MDXComponent = {
	h1: ({ children }: any) => {
		return <h1 className="font-bold text-5xl my-10">{children[1]}</h1>;
	},
	h2: ({ children }: any) => {
		return (
			<h2
				id={children[0].props.href.slice(1)}
				className={`flex justify-start items-center gap-4 my-8
                font-bold text-4xl`}
			>
				{children[1]}
				<HeadingAnchor href={children[0].props.href}>#</HeadingAnchor>
			</h2>
		);
	},
	h3: ({ children }: any) => {
		return (
			<h3
				id={children[0].props.href.slice(1)}
				className={`flex justify-start items-center gap-4 my-6
                font-bold text-3xl`}
			>
				{children[1]}
				<HeadingAnchor href={children[0].props.href}>#</HeadingAnchor>
			</h3>
		);
	},
	h4: ({ children }: any) => {
		return (
			<h4
				id={children[0].props.href.slice(1)}
				className={`flex justify-start items-center gap-4 my-6
                font-bold text-2xl`}
			>
				{children[1]}
				<HeadingAnchor href={children[0].props.href}>#</HeadingAnchor>
			</h4>
		);
	},
	h5: ({ children }: any) => {
		return (
			<h5
				id={children[0].props.href.slice(1)}
				className={`flex justify-start items-center gap-4 my-6
                font-bold text-xl`}
			>
				{children[1]}
				<HeadingAnchor href={children[0].props.href}>#</HeadingAnchor>
			</h5>
		);
	},
	h6: ({ children }: any) => {
		return (
			<h6
				id={children[0].props.href.slice(1)}
				className={`flex justify-start items-center gap-4 my-4
                font-bold text-lg`}
			>
				{children[1]}
				<HeadingAnchor href={children[0].props.href}>#</HeadingAnchor>
			</h6>
		);
	},

	p: ({ children }: any) => {
		return <p className="my-2">{children}</p>;
	},

	strong: ({ children }: any) => {
		return <strong>{children}</strong>;
	},

	/**
	 * ❗ Custom a tag will lose the link
	 * Wrap it as a independant component and use JSX syntax
	 * instead of Markdown syntax
	 */
	// a: ({ children }:any) => {
	// 	return <StyledA>{children}</StyledA>;
	// },

	ul: ({ children }: any) => {
		return (
			<ul
				className="list-outside list-disc my-3 pl-4
                [&_>_li_>_ul]:list-outside
                [&_>_li_>_ul]:pl-4 [&_>_li_>_ul]:my-2
                [&_>_li_>_ul]:list-[circle]"
			>
				{children}
			</ul>
		);
	},

	ol: ({ children }: any) => {
		return (
			<ol
				className="list-outside list-decimal my-3 pl-4
                [&_>_li]:my-2"
			>
				{children}
			</ol>
		);
	},

	table: ({ children }: any) => {
		return <ResponsiveTable>{children}</ResponsiveTable>;
	},

	blockquote: ({ children }: any) => {
		return <Blockquote>{children}</Blockquote>;
	},

	code: ({ children }: any) => {
		return <InlineCode>{children}</InlineCode>;
	},

	pre: DynamicStyledPre,
	YouTubeVideoContainer: YouTubeVideoContainer,
	FacebookVideoContainer: DynamicFacebookVideoContainer,
	BilibiliVideoContainer: BilibiliVideoContainer,
	Admonition: Admonition,
	AntdImage: AntdImage,
	ImageComparison: ImageComparison,
	ImageContainer: ImageContainer,
	ResponsiveTable: ResponsiveTable,
	SpanA: SpanA,
	SpanText: SpanText,
	NextLink: NextLink,
};
