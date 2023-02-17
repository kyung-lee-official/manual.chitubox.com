import { useRouter } from "next/router";
import React, { useContext } from "react";
import styled from "styled-components";
import { DocsMenu } from "..";
import { DocContext } from "../docsLayout";

const StyledSidebar = styled.div`
	flex: 0 0 300px;
	transition-duration: 0.2s;
	box-shadow: 1px 0px 6px ${(props) => props.theme.headerShadow};
`;

const StyledSidebarAffix = styled.div`
	position: -webkit-sticky;
	position: sticky;
	top: 160px;
	overflow-y: auto;
	min-height: 100vh;
	&::-webkit-scrollbar {
		width: 7px;
		border-radius: 3px;
		background-color: ${(props) => props.theme.sidebarScrollbar};
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 3px;
		background-color: ${(props) => props.theme.sidebarScrollbarThumb};
	}
	&::-webkit-scrollbar-thumb {
		&:hover {
			border-radius: 3px;
			background-color: ${(props) => props.theme.sidebarScrollbarHover};
		}
	}
`;

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
		<StyledSidebar>
			<StyledSidebarAffix>
				<DocsMenu
					menuItems={menuItems}
					defaultOpenKeys={[]}
					activeKey={selectedKey}
				/>
			</StyledSidebarAffix>
		</StyledSidebar>
	);
};
