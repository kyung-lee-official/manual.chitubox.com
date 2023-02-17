import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { SubMenuToggle } from "..";

const StyledLink = styled(Link)`
	text-decoration: none;
`;

const StyledOuterUl = styled.ul`
	display: flex;
	flex-direction: column;
	font-size: 1rem;
	font-weight: 700;
	list-style-type: none;
	padding: 0;
`;

const StyledSubUl = styled(motion.ul)`
	list-style-type: none;
	padding: 0;
`;

interface StyledUlHeadProps {
	$hasActiveKey: boolean;
}
const StyledUlHead = styled.div<StyledUlHeadProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 23px;
	color: ${(props) => {
		if (props.$hasActiveKey) {
			return props.theme.sidebarActiveItem;
		} else {
			return props.theme.textContent;
		}
	}};
	cursor: pointer;
`;

const StyledToggleWrapper = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

interface StyledItemProps {
	$isActiveItem: boolean;
}
const StyledItem = styled(motion.li)<StyledItemProps>`
	padding: 10px 23px;
	color: ${(props) => {
		if (props.$isActiveItem) {
			return props.theme.sidebarActiveItem;
		} else {
			return props.theme.textContent;
		}
	}};
	background-color: ${(props) => {
		if (props.$isActiveItem) {
			return props.theme.sidebarActiveBackground;
		} else {
			return null;
		}
	}};
	cursor: pointer;
`;

interface StyledSubProps {
	$isActiveItem: boolean;
}
const StyledSubItem = styled(motion.li)<StyledSubProps>`
	padding: 10px 23px 10px 40px;
	color: ${(props) => {
		if (props.$isActiveItem) {
			return "#00aeff";
		} else {
			return props.theme.textContent;
		}
	}};
	background-color: ${(props) => {
		if (props.$isActiveItem) {
			return props.theme.sidebarActiveBackground;
		} else {
			return null;
		}
	}};
	cursor: pointer;
`;

const StyledWrapperItem = styled.li`
	padding: 0;
`;

const SubMenu: React.FC<any> = (props) => {
	const { subItemContext, isDefaultOpen, activeKey } = props;
	const hasActiveKey: boolean =
		subItemContext.subItems.filter((subItem: any) => {
			return subItem.path === activeKey;
		}).length > 0;
	const [show, setShow] = useState<boolean>(isDefaultOpen);

	const subUlVariant = {
		hidden: {
			maxHeight: "0px",
		},
		visible: {
			maxHeight: "5000px",
			transition: {
				staggerChildren: 0.1,
				duration: 1,
			},
		},
	};
	const subItemVariant = {
		hidden: {
			opacity: 0,
			x: -10,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	};

	function onUlHeadClick(event: any) {
		setShow(!show);
	}

	return (
		<StyledWrapperItem>
			<StyledUlHead onClick={onUlHeadClick} $hasActiveKey={hasActiveKey}>
				<div>{subItemContext.label}</div>
				<StyledToggleWrapper
					initial={{ rotate: show ? 90 : 0 }}
					animate={{ rotate: show ? 90 : 0 }}
				>
					<SubMenuToggle size={"24px"} />
				</StyledToggleWrapper>
			</StyledUlHead>
			{show ? (
				<StyledSubUl
					initial="hidden"
					animate="visible"
					variants={hasActiveKey ? {} : subUlVariant}
				>
					{subItemContext.subItems.map((subItem: any, i: number) => {
						const isActiveItem: boolean =
							subItem.path === activeKey;
						return (
							<StyledLink href={subItem.path} key={subItem.path}>
								<StyledSubItem
									variants={
										hasActiveKey ? {} : subItemVariant
									}
									$isActiveItem={isActiveItem}
								>
									{subItem.label}
								</StyledSubItem>
							</StyledLink>
						);
					})}
				</StyledSubUl>
			) : null}
		</StyledWrapperItem>
	);
};

export const DocsMenu: React.FC<any> = (props) => {
	const { menuItems, defaultOpenKeys, activeKey } = props;
	return (
		<StyledOuterUl>
			{menuItems.map((item: any, i: number) => {
				if (!item.subItems) {
					const isActiveItem: boolean = item.path === activeKey;
					return (
						<StyledLink href={item.path} key={item.path}>
							<StyledItem $isActiveItem={isActiveItem}>
								{item.label}
							</StyledItem>
						</StyledLink>
					);
				} else {
					const isDefaultOpen: boolean =
						item.subItems.filter((subItem: any) => {
							for (const key of [...defaultOpenKeys, activeKey]) {
								if (subItem.path === key) {
									return true;
								}
							}
							return false;
						}).length > 0;
					return (
						<SubMenu
							key={i}
							subItemContext={item}
							isDefaultOpen={isDefaultOpen}
							activeKey={activeKey}
						/>
					);
				}
			})}
		</StyledOuterUl>
	);
};
