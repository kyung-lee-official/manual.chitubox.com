"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";
import { SubMenu } from "./SubMenu";
import { Block } from "./Block";
import { useDocsContext } from "@/utils/hooks";

export const DocsMenu = (props: {
	setShowMenu: Dispatch<SetStateAction<boolean>>;
}) => {
	const { setShowMenu } = props;

	const pathname = usePathname();
	const { docInstanceContext, versionedContext } = useDocsContext();

	/* Set activeKey and openKey for Menu. */
	const [openKeys, setOpenKeys] = useState<string[]>([]);

	if (docInstanceContext) {
		return (
			<Block>
				{versionedContext.pagesContext.map((item: any, i: number) => {
					if (i < versionedContext.pagesContext.length - 1) {
						if (item.subItems) {
							return (
								<div key={item.path}>
									<SubMenu
										categoryContext={item}
										pathname={pathname}
										openKeys={openKeys}
										setOpenKeys={setOpenKeys}
										setShowMenu={setShowMenu}
									/>
									<hr className="dark:border-neutral-700" />
								</div>
							);
						} else {
							return (
								<Link
									href={item.path}
									key={item.path}
									onClick={() => {
										setShowMenu(false);
									}}
								>
									<div
										className={`py-2 ${
											item.path === pathname &&
											"text-blue-500 dark:text-sky-400"
										}`}
									>
										{item.label}
									</div>
									<hr className="dark:border-neutral-700" />
								</Link>
							);
						}
					} else {
						/* last one */
						if (item.subItems) {
							return (
								<SubMenu
									key={item.path}
									categoryContext={item}
									pathname={pathname}
									openKeys={openKeys}
									setOpenKeys={setOpenKeys}
									setShowMenu={setShowMenu}
								/>
							);
						} else {
							return (
								<Link
									href={item.path}
									key={item.path}
									onClick={() => {
										setShowMenu(false);
									}}
								>
									<div
										className={`py-2 ${
											item.path === pathname &&
											"text-blue-500 dark:text-sky-400"
										}`}
									>
										{item.label}
									</div>
								</Link>
							);
						}
					}
				})}
			</Block>
		);
	} else {
		return null;
	}
};
