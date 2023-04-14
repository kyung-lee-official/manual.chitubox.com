import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const DocsSearchResult: React.FC<any> = ({ searchResults }) => {
	const router = useRouter();
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		setIsDesktop(isDesktopOrLaptop);
	}, [isDesktopOrLaptop]);

	if (isDesktop) {
		if (searchResults.length > 0) {
			return (
				<div
					className="absolute top-12 right-10 flex flex-col gap-2 w-64 py-3
                    bg-gray-50 dark:bg-gray-700 ackdrop-blur-md
                    shadow-lg rounded-lg cursor-default"
				>
					{searchResults.map((result: any) => {
						const { label, path } = result;
						return (
							<div
								className="flex justify-start items-center px-6
                                    font-medium text-lg hover:text-blue-500
                                    cursor-pointer"
								key={path}
								onMouseDown={() => {
									router.push(`/${path}`);
								}}
							>
								{label}
							</div>
						);
					})}
				</div>
			);
		} else {
			return null;
		}
	} else {
		if (searchResults.length > 0) {
			return (
				<div
					className="static top-10 right-10 w-64
                        bg-gray-50 dark:bg-gray-700
                        shadow-lg rounded-lg"
				>
					{searchResults.map((result: any) => {
						const { label, path } = result;
						return (
							<div
								className="flex justify-start items-center px-6
                                    font-medium text-lg hover:text-blue-500"
								key={path}
								onMouseDown={() => {
									router.push(`/${path}`);
								}}
							>
								{label}
							</div>
						);
					})}
				</div>
			);
		} else {
			return null;
		}
	}
};
