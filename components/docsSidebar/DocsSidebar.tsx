import { useRouter } from "next/router";
import React, { useContext } from "react";
import { DocsMenu } from "..";
import { DocContext } from "../docsLayout";

export const DocsSidebar: React.FC<any> = () => {
	const router = useRouter();
	const { versionedContext } = useContext(DocContext);
	const menuItems = versionedContext.pagesContext;

	/* Set selectedKeys and openKeys for Menu. */
	let selectedKey: string = "";
	let openKeys: string[] = [];
	function initSidebarMenu() {
		selectedKey = router.pathname.endsWith("/")
			? router.pathname.slice(0, -1)
			: router.pathname;
		let openKeyOfSelectedKeyObject = versionedContext.pagesContext.find(
			(item: any) => {
				if (item.subItems) {
					if (
						item.subItems.filter((subItem: any) => {
							return subItem.path === selectedKey;
						}).length != 0
					) {
						return true;
					}
				} else {
					return false;
				}
			}
		);
		if (openKeyOfSelectedKeyObject !== undefined) {
			openKeys.push(openKeyOfSelectedKeyObject.label);
		}
	}
	initSidebarMenu();

	return (
		<div
			className="flex-[0_0_300px] border-r-[1px] border-gray-300 dark:border-gray-700
            transition-color duration-300"
		>
			<div className="sticky top-32 max-h-[80vh] overflow-auto scrollbar">
				<DocsMenu
					menuItems={menuItems}
					defaultOpenKeys={[]}
					activeKey={selectedKey}
				/>
			</div>
		</div>
	);
};
