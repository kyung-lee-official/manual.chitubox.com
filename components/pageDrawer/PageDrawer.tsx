import { Drawer } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { dark } from "styles/themes";
import { BasicLogo2022, DrawerClose, PageDrawerContent } from "..";

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
	return (
		<StyledDrawerHeader>
			<StyledIconWrapper
				onClick={() => {
					setOpenDrawer(false);
				}}
			>
				<DrawerClose size={"24px"} fill={darkStyle.color} />
			</StyledIconWrapper>
			<StyledTitleAndTitleLink>
				<BasicLogo2022 size={"48px"} />
			</StyledTitleAndTitleLink>
			<StyledTitleAndTitleLink>
				<StyledTitle>{t("header.title")}</StyledTitle>
			</StyledTitleAndTitleLink>
			<StyledPlaceHolder />
		</StyledDrawerHeader>
	);
};

export const PageDrawer: React.FC<any> = (props) => {
	const { openDrawer, setOpenDrawer } = props;

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
			style={darkStyle}
		>
			<PageDrawerContent />
		</Drawer>
	);
};
