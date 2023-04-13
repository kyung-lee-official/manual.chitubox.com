import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const DocsSearchResult: React.FC<any> = ({ searchResults }) => {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	if (mounted) {
		if (isDesktopOrLaptop) {
			if (searchResults.length > 0) {
				return (
					<div
						className="absolute top-12 right-10 flex flex-col gap-2 w-64 py-3
                        bg-gray-50 dark:bg-gray-700
                        shadow-lg rounded-lg cursor-default"
					>
						{searchResults.map((result: any) => {
							const { label, path } = result;
							return (
								<div
									className="flex justify-start items-center px-6
                                    font-medium text-lg hover:text-green-500
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
                                    font-medium text-lg hover:text-green-500"
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
	} else {
		return null;
	}
};
