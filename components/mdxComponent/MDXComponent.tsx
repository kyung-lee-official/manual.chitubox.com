import styled from "styled-components";
import { Image } from "antd";
import React from "react";
import { BilibiliVideoContainer } from "../videoContainer/BilibiliVideoContainer";
import { YouTubeVideoContainer } from "../videoContainer/YouTubeVideoContainer";
import { FacebookVideoContainer } from "../videoContainer/FacebookVideoContainer";
import Link from "next/link";
import { ResponsiveTable } from "../responsiveTable/ResponsiveTable";
import { StyledPre } from "../styledPre/StyledPre";
import { Admonition } from "../admonition/Admonition";
import { ImageComparison } from "../imageComparison/ImageComparison";
import { ImageContainer } from "../imageContainer/ImageContainer";

const StyledHeadingAnchor = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	opacity: 0.2;
	transition: 0.3s;
`;

const StyledH1 = styled.h1`
	font-size: 2.2rem;
	font-weight: bolder;
	color: ${(props) => props.theme.textContent};
`;

const StyledH2 = styled.h2`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	margin: 1rem 0rem;
	font-size: 1.8rem;
	font-weight: bolder;
	&:hover {
		${StyledHeadingAnchor} {
			opacity: 1;
			transition: 0.3s;
		}
	}
	color: ${(props) => props.theme.textContent};
	transition-duration: ${(props) => props.theme.transitionDuration};
`;

const StyledH3 = styled.h3`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	margin: 1rem 0rem;
	font-size: 1.6rem;
	font-weight: bolder;
	&:hover {
		${StyledHeadingAnchor} {
			opacity: 1;
			transition: 0.3s;
		}
	}
	color: ${(props) => props.theme.textContent};
	transition-duration: ${(props) => props.theme.transitionDuration};
`;

const StyledH4 = styled.h4`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	margin: 1rem 0rem;
	font-size: 1.4rem;
	font-weight: bolder;
	&:hover {
		${StyledHeadingAnchor} {
			opacity: 1;
			transition: 0.3s;
		}
	}
	color: ${(props) => props.theme.textContent};
	transition-duration: ${(props) => props.theme.transitionDuration};
`;

const StyledH5 = styled.h5`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	margin: 1rem 0rem;
	font-size: 1.2rem;
	font-weight: bolder;
	&:hover {
		${StyledHeadingAnchor} {
			opacity: 1;
			transition: 0.3s;
		}
	}
	color: ${(props) => props.theme.textContent};
	transition-duration: ${(props) => props.theme.transitionDuration};
`;

const StyledH6 = styled.h6`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	margin: 1rem 0rem;
	font-size: 1.1rem;
	font-weight: bolder;
	&:hover {
		${StyledHeadingAnchor} {
			opacity: 1;
			transition: 0.3s;
		}
	}
	color: ${(props) => props.theme.textContent};
	transition-duration: ${(props) => props.theme.transitionDuration};
`;

const StyledP = styled.p`
	font-size: 1.07rem;
	font-weight: 600;
	line-height: 2rem;
`;

const SpanText: React.FC<any> = (props) => {
	const { children } = props;
	return <StyledP>{children}</StyledP>;
};

const StyledStrong = styled.strong`
	font-size: 1.1rem;
`;

const StyledA = styled.a`
	color: #00aeff;
`;

const SpanA: React.FC<any> = (props) => {
	const { children, href } = props;
	return (
		<strong>
			<StyledA href={href}>{children}</StyledA>
		</strong>
	);
};

const NextLink: React.FC<any> = (props) => {
	const { children, href } = props;
	return (
		<strong style={{ color: "#00aeff" }}>
			<Link href={href}>{children}</Link>
		</strong>
	);
};

const StyledUl = styled.ul`
	font-size: 1.03rem;
	font-weight: 700;
`;

const StyledOl = styled.ol`
	font-size: 1.03rem;
	font-weight: 700;
`;

const StyledBlockquote = styled.blockquote`
	padding-left: 1rem;
	border-left: 3px solid ${(props) => props.theme.textSecondaryText};
	color: ${(props) => props.theme.textSecondaryText};
	font-size: 1.06rem;
`;

const StyledInlineCode = styled.code`
	padding: 0rem 0.2rem 0rem 0.2rem;
	color: ${(props) => props.theme.mdxComponentCode};
	border: 2px solid ${(props) => props.theme.mdxComponentCodeBorder};
	border-radius: 5px;
	font-size: 1.06rem;
`;

const AntdImage: React.FC<any> = (props) => {
	return <Image {...props} className="m-auto rounded-lg" />;
};

export const MDXComponent = {
	h1: ({ children }: any) => {
		return <StyledH1>{children[1]}</StyledH1>;
	},
	h2: ({ children }: any) => {
		return (
			<StyledH2 id={children[0].props.href.slice(1)}>
				{children[1]}
				<StyledHeadingAnchor href={children[0].props.href}>
					#
				</StyledHeadingAnchor>
			</StyledH2>
		);
	},
	h3: ({ children }: any) => {
		return (
			<StyledH3 id={children[0].props.href.slice(1)}>
				{children[1]}
				<StyledHeadingAnchor href={children[0].props.href}>
					#
				</StyledHeadingAnchor>
			</StyledH3>
		);
	},
	h4: ({ children }: any) => {
		return (
			<StyledH4 id={children[0].props.href.slice(1)}>
				{children[1]}
				<StyledHeadingAnchor href={children[0].props.href}>
					#
				</StyledHeadingAnchor>
			</StyledH4>
		);
	},
	h5: ({ children }: any) => {
		return (
			<StyledH5 id={children[0].props.href.slice(1)}>
				{children[1]}
				<StyledHeadingAnchor href={children[0].props.href}>
					#
				</StyledHeadingAnchor>
			</StyledH5>
		);
	},
	h6: ({ children }: any) => {
		return (
			<StyledH6 id={children[0].props.href.slice(1)}>
				{children[1]}
				<StyledHeadingAnchor href={children[0].props.href}>
					#
				</StyledHeadingAnchor>
			</StyledH6>
		);
	},

	p: ({ children }: any) => {
		return <StyledP>{children}</StyledP>;
	},

	strong: ({ children }: any) => {
		return <StyledStrong>{children}</StyledStrong>;
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
		return <StyledUl>{children}</StyledUl>;
	},

	ol: ({ children }: any) => {
		return <StyledOl>{children}</StyledOl>;
	},

	table: ({ children }: any) => {
		return <ResponsiveTable>{children}</ResponsiveTable>;
	},

	blockquote: ({ children }: any) => {
		return <StyledBlockquote>{children}</StyledBlockquote>;
	},

	code: ({ children }: any) => {
		return <StyledInlineCode>{children}</StyledInlineCode>;
	},

	pre: StyledPre,
	YouTubeVideoContainer: YouTubeVideoContainer,
	FacebookVideoContainer: FacebookVideoContainer,
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
