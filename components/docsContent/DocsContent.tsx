import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DocsSidebar } from "../docsSidebar/DocsSidebar";
import { MdxContainer } from "../mdxContainer/MdxContainer";
import { Toc } from "../toc/Toc";

export const DocsContent: React.FC<any> = (props) => {
	const { children } = props;
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		setIsDesktop(isDesktopOrLaptop);
	}, [isDesktopOrLaptop]);

	return (
		<div
			className="flex min-h-screen
            font-sans text-gray-800 dark:text-gray-100
            bg-slate-50 dark:bg-gray-800"
		>
			{isDesktop && <DocsSidebar />}
			<MdxContainer>{children}</MdxContainer>
			{isDesktop && <Toc />}
		</div>
	);
};
