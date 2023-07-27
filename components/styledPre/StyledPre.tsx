import React, { useEffect, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { useMediaQuery } from "react-responsive";

const Pre = (props: any) => {
	const { children, ...rest } = props;
	return (
		<pre {...rest} className={`p-3 my-6 overflow-auto round-sm scrollbar`}>
			{children}
		</pre>
	);
};

const Line = (props: any) => {
	const { children } = props;
	return <div className="table-row">{children}</div>;
};

// const LineNo = styled.span`
// 	display: table-cell;
// 	text-align: right;
// 	padding-right: 1em;
// 	user-select: none;
// 	opacity: 0.5;
// `;

const LineContent = (props: any) => {
	const { children } = props;
	return <span className="table-cell">{children}</span>;
};

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
			theme={themes.shadesOfPurple}
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
