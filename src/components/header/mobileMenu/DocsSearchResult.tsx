import Link from "next/link";
import { Block } from "./Block";
import { Dispatch, SetStateAction } from "react";

export const DocsSearchResult = (props: {
	searchResults: any;
	setShowMenu: Dispatch<SetStateAction<boolean>>;
}) => {
	const { searchResults, setShowMenu } = props;

	if (searchResults.length > 0) {
		return (
			<Block>
				{searchResults.map((result: any, i: number) => {
					const { label, path } = result;
					if (i < searchResults.length - 1) {
						return (
							<Link href={path} key={path}>
								<div
									className="flex justify-start items-center py-2"
									onClick={() => {
										setShowMenu(false);
									}}
								>
									{label}
								</div>
								<hr className="dark:border-neutral-700" />
							</Link>
						);
					} else {
						return (
							<Link
								href={path}
								key={path}
								className="flex justify-start items-center py-2"
								onClick={() => {
									setShowMenu(false);
								}}
							>
								{label}
							</Link>
						);
					}
				})}
			</Block>
		);
	} else {
		return null;
	}
};
