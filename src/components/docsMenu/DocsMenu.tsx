"use client";

import Link from "next/link";
import { useState } from "react";
import { SubMenu } from "./SubMenu";
import { useDocsContext } from "@/utils/hooks";
import { usePathname } from "next/navigation";

export const DocsMenu: React.FC<any> = () => {
	const pathname = usePathname();
	const { docInstanceContext, versionedContext } = useDocsContext();

	/* Set activeKey and openKey for Menu. */
	const [openKeys, setOpenKeys] = useState<string[]>([]);

	if (docInstanceContext) {
		return (
			<ul
				className="flex flex-col p-4 gap-2
				list-none"
			>
				{versionedContext.pagesContext.map((item: any, i: number) => {
					if (item.subItems) {
						return (
							<SubMenu
								key={item.path}
								categoryContext={item}
								pathname={pathname}
								openKeys={openKeys}
								setOpenKeys={setOpenKeys}
							/>
						);
					} else {
						return (
							<Link href={item.path} key={item.path}>
								<li
									className={`${
										item.path === pathname &&
										"text-blue-500 dark:text-sky-400"
									}`}
								>
									{item.label}
								</li>
							</Link>
						);
					}
				})}
			</ul>
		);
	} else {
		return null;
	}
};
