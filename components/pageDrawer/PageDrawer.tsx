import { Drawer } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { dark } from "styles/themes";
import { BasicLogo2022, DrawerClose } from "../icons/Icons";
import { PageDrawerContent } from "../pageDrawerContent/PageDrawerContent";

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

const TitleAndTitleLink = (props: any) => {
	const { children } = props;
	return <div className="flex justify-center items-center">{children}</div>;
};

const Title: React.FC<any> = (props) => {
	const { setOpenDrawer } = props;
	const { t } = useTranslation();
	return (
		<div
			className="flex justify-evenly items-center gap-6 px-8
            text-gray-700 dark:text-gray-300"
		>
			<div
				className="flex justify-center items-center cursor-pointer"
				onClick={() => {
					setOpenDrawer(false);
				}}
			>
				<DrawerClose size={24} fill={darkStyle.color} />
			</div>
			<TitleAndTitleLink>
				<BasicLogo2022 size={48} />
			</TitleAndTitleLink>
			<TitleAndTitleLink>
				<span className="font-medium text-xl">{t("header.title")}</span>
			</TitleAndTitleLink>
			<div className="flex-1" />
		</div>
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
