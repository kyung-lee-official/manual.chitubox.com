import { Drawer } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { dark, light } from "styles/themes";
import { DocsDrawerContent, DrawerClose, Logo2021 } from "..";
import { Theme, useThemeStore } from "stores/theme";

const headerStyle = {
	display: "flex",
	minHeight: "4.5rem",
	padding: 0,
};

const darkStyle = {
	color: dark.textTitle,
	backgroundColor: dark.drawerBackground,
	backdropFilter: "blur(5px)",
};

const lightStyle = {
	color: light.textTitle,
	backgroundColor: light.drawerBackground,
	backdropFilter: "blur(5px)",
};

const StyledDrawerHeader = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 0rem 2rem;
	gap: 1.5rem;
	font-family: "system-ui";
`;

const StyledIconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const StyledTitleAndTitleLink = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledTitle = styled.span`
	font-size: 1.3rem;
	font-weight: bold;
	color: ${(props) => props.theme.textTitle};
	transition-duration: ${(props) => props.theme.transitionDuration};
`;

const StyledPlaceHolder = styled.div`
	flex: 1;
`;

const Title: React.FC<any> = (props) => {
	const { setOpenDrawer } = props;
	const { t } = useTranslation();
	const { theme } = useThemeStore();

	return (
		<StyledDrawerHeader>
			<StyledIconWrapper
				onClick={() => {
					setOpenDrawer(false);
				}}
			>
				<DrawerClose
					size={"24px"}
					fill={
						theme === Theme.DARK
							? darkStyle.color
							: lightStyle.color
					}
				/>
			</StyledIconWrapper>
			<StyledTitleAndTitleLink>
				<Logo2021 size={"48px"} fill={"#0086cc"} />
			</StyledTitleAndTitleLink>
			<StyledTitleAndTitleLink>
				<StyledTitle>{t("header.title")}</StyledTitle>
			</StyledTitleAndTitleLink>
			<StyledPlaceHolder />
		</StyledDrawerHeader>
	);
};

export const DocsDrawer: React.FC<any> = (props) => {
	const { openDrawer, setOpenDrawer } = props;
	const { theme } = useThemeStore();

	return (
		<Drawer
			title={<Title setOpenDrawer={setOpenDrawer} />}
			placement={"left"}
			closable={false}
			onClose={() => {
				setOpenDrawer(false);
			}}
			open={openDrawer}
			headerStyle={headerStyle}
			style={theme === Theme.DARK ? darkStyle : lightStyle}
		>
			<DocsDrawerContent />
		</Drawer>
	);
};
