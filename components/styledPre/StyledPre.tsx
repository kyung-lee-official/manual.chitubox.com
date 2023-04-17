import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { useMediaQuery } from "react-responsive";

const Pre = styled.pre.attrs((props: { maxWidth: string }) => props)`
	margin: 1.5rem 0rem;
	padding: 0.7em;
	text-align: left;
	font-size: 1rem;
	overflow: auto;
	border-radius: 0.5rem;
	max-width: ${(props) => props.maxWidth};
	&::-webkit-scrollbar {
		height: 6px;
		border-radius: 3px;
		background-color: ${(props) => props.theme.sidebarScrollbar};
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 3px;
		background-color: ${(props) => props.theme.sidebarScrollbarThumb};
	}
	&::-webkit-scrollbar-thumb {
		&:hover {
			border-radius: 3px;
			background-color: ${(props) => props.theme.sidebarScrollbarHover};
		}
	}
`;

const Line = styled.div`
	display: table-row;
`;

// const LineNo = styled.span`
// 	display: table-cell;
// 	text-align: right;
// 	padding-right: 1em;
// 	user-select: none;
// 	opacity: 0.5;
// `;

const LineContent = styled.span`
	display: table-cell;
`;

const StyledPre: React.FC<any> = (props) => {
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
	const [isDesktop, setIsDesktop] = useState(isDesktopOrLaptop);
	useEffect(() => {
		setIsDesktop(isDesktopOrLaptop);
	}, [isDesktopOrLaptop]);

	const className = props.children.props.className;
	// This will trim off the "language-" prefix.
	const language = className.replace(/language-/, "");
	return (
		<Highlight
			{...defaultProps}
			theme={theme}
			code={props.children.props.children.trim()}
			language={language}
		>
			{({
				className,
				style,
				tokens,
				getLineProps,
				getTokenProps,
			}: any) => (
				<Pre
					className={className}
					style={style}
					maxWidth={isDesktop ? "45vw" : "80vw"}
				>
					{tokens.map((line: any, i: number) => (
						<Line key={i} {...getLineProps({ line, key: i })}>
							{/* <LineNo>{i + 1}</LineNo> */}
							<LineContent>
								{line.map((token: any, key: number) => (
									<span
										key={key}
										{...getTokenProps({ token, key })}
									/>
								))}
							</LineContent>
						</Line>
					))}
				</Pre>
			)}
		</Highlight>
	);
};

export default StyledPre;
