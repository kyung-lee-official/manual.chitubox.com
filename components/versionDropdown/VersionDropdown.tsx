import React, { useContext } from "react";
import { Dropdown, MenuProps } from "antd";
import styled from "styled-components";
import { DocContext } from "../docsLayout";
import { TbVersions } from "..";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

const StyledTitleLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`;

const StyledCustomDropdownContainer = styled.div`
	position: relative;
	top: 8px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	min-width: 6rem;
	padding: 0.3rem 0;
	background-color: ${(props) => props.theme.searchbarResultsBackground};
	backdrop-filter: blur(4px);
	box-shadow: 0px 0px 10px 3px
		${(props) => props.theme.searchbarResultsShadow};
	border-radius: 10px;
`;

const StyledCustomDropdownItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.headerIcons};
	width: 100%;
	padding: 0.3rem 0;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		color: ${(props) => props.theme.basic};
		transition: 0.3s;
	}
`;

export const VersionDropdown: React.FC<any> = ({ color }) => {
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
	const router = useRouter();
	const { docInstanceContext } = useContext(DocContext);
	const { isVersioned } = docInstanceContext;

	if (isVersioned) {
		const versionMenuItems: MenuProps["items"] =
			docInstanceContext.versionedContexts.map(
				(versionedContext: any, i: any) => {
					return {
						label: (
							<Link href={versionedContext.pagesContext[0].path}>
								{versionedContext.versionCode}
							</Link>
						),
						key: versionedContext.versionCode,
					};
				}
			);
		return (
			<Dropdown
				menu={{ items: versionMenuItems }}
				placement={isDesktopOrLaptop ? "bottomRight" : "bottomLeft"}
				dropdownRender={(menus: any) => {
					if (menus) {
						const { items } = menus.props;
						return (
							<StyledCustomDropdownContainer>
								{items.map((item: any) => {
									const { children, href } = item.label.props;
									return (
										<StyledCustomDropdownItem
											key={item.key}
											onClick={() => {
												router.push(href);
											}}
										>
											{children}
										</StyledCustomDropdownItem>
									);
								})}
							</StyledCustomDropdownContainer>
						);
					}
				}}
			>
				<StyledTitleLink onClick={(e) => e.preventDefault()}>
					<TbVersions size={"28px"} fill={color} />
				</StyledTitleLink>
			</Dropdown>
		);
	} else {
		return null;
	}
};
