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
