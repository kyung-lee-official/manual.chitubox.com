import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { TbVersions } from "../icons/Icons";
import { MediaQuery } from "@/utils/types";
import { useDocsContext } from "@/utils/hooks";

const VersionDropdown = () => {
	const { docInstanceContext } = useDocsContext();

	const [showVersionMenu, setShowVersionMenu] = useState<boolean>(false);

	const isDesktopOrLaptop = useMediaQuery({ query: MediaQuery.lg });

	if (isDesktopOrLaptop && docInstanceContext) {
		return (
			<div className="relative w-8 h-8">
				<div
					className="absolute right-0
					flex flex-col justify-start items-end gap-6
					whitespace-nowrap"
					onMouseLeave={() => {
						setShowVersionMenu(false);
					}}
				>
					<button
						onMouseEnter={() => {
							setShowVersionMenu(true);
						}}
					>
						<TbVersions size={32} />
					</button>
					{showVersionMenu && (
						<ul
							className="flex flex-col items-center p-2 gap-1
							bg-white dark:bg-black
							border-[1px] border-neutral-200 dark:border-neutral-800
							rounded-md"
						>
							{docInstanceContext.versionedContexts.map(
								(versionedContext: any, i: any) => {
									return (
										<Link
											href={
												versionedContext.pagesContext[0]
													.path
											}
											key={i}
											className="w-full px-2 py-1
											hover:bg-neutral-100 dark:hover:bg-neutral-800
											rounded"
										>
											{versionedContext.versionCode}
										</Link>
									);
								}
							)}
						</ul>
					)}
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default VersionDropdown;
