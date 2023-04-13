import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DocsSidebar, MdxContainer, Toc } from "..";

export const DocsContent: React.FC<any> = (props) => {
	const { children } = props;
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		setIsDesktop(isDesktopOrLaptop);
	}, [isDesktopOrLaptop]);

	return (
		<div className="flex min-h-[100vh]">
			{isDesktop ? <DocsSidebar /> : null}
			<MdxContainer>{children}</MdxContainer>
			{isDesktop ? <Toc /> : null}
		</div>
	);
};
