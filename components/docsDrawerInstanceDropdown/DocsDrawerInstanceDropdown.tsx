import { Dropdown } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import styled from "styled-components";
import { DocContext } from "../docsLayout";

const StyledCurrentInstance = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.3rem 0;
	font-size: 1.3rem;
	background-color: ${(props) => props.theme.searchbarResultsBackground};
	box-shadow: 0px 0px 10px 3px
		${(props) => props.theme.searchbarResultsShadow};
	border-radius: 10px;
	cursor: pointer;
`;

const StyledCustomDropdownContainer = styled.div`
	position: relative;
	top: 8px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	padding: 0.3rem 0;
	font-size: 1.3rem;
	background-color: ${(props) => props.theme.searchbarResultsBackground};
	backdrop-filter: blur(4px);
	box-shadow: 0px 0px 10px 3px
		${(props) => props.theme.searchbarResultsShadow};
	border-radius: 10px;
`;

const StyledCustomDropdownItem = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: ${(props) => props.theme.headerIcons};
	width: 100%;
	padding: 0.3rem 2rem;
	font-size: 1.3rem;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		color: ${(props) => props.theme.basic};
		transition: 0.3s;
	}
`;

export const DocsDrawerInstanceDropdown: React.FC<any> = () => {
	const router = useRouter();
	const {
		localizedContext,
		docInstanceContext: { docInstanceName },
	} = useContext(DocContext);

	const instanceMenu = localizedContext.localizedDocInstances.map(
		(item: any) => {
			return {
				key: item.docInstance,
				label: (
					<Link href={item.versionedContexts[0].pagesContext[0].path}>
						{item.docInstanceName}
					</Link>
				),
			};
		}
	);

	return (
		<Dropdown
			menu={{ items: instanceMenu }}
			placement={"bottom"}
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
			<StyledCurrentInstance>
				{
					localizedContext.localizedDocInstances.find(
						(instance: any, i: number) => {
							return instance.docInstanceName === docInstanceName;
						}
					).docInstanceName
				}
			</StyledCurrentInstance>
		</Dropdown>
	);
};
