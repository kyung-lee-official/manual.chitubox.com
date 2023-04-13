import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import {
	AiOutlineMenu,
	Banner,
	BasicLogo2022,
	LanguageDropdown,
	PageDrawer,
} from "..";
import { motion } from "framer-motion";

interface StyledHeaderContainerProps {
	$isLargeScreen: boolean;
}
const StyledHeaderContainer = styled.div<StyledHeaderContainerProps>`
	display: flex;
	gap: 1.5rem;
	justify-content: ${(props) =>
		props.$isLargeScreen ? "space-between" : "space-evenly"};
	align-items: center;
	padding: ${(props) =>
		props.$isLargeScreen ? "0rem 3rem 0rem 3rem" : "0rem 2rem 0rem 2rem"};
	background-color: #14212e;
	/* background-color: ${(props) => props.theme.headerBackground}; */
	/* box-shadow: 0px 3px 6px hsl(0, 0%, 0%, 0.3); */
	height: 4.5rem;
`;

const HeaderContainer = (props: any) => {
	const { children } = props;

	return (
		<div
			className={`flex justify-between items-center gap-6 h-16 px-16
            text-2xl font-sans
            text-gray-400
            bg-slate-800
            shadow-md
            transition-colors duration-300`}
		>
			{children}
		</div>
	);
};

const StyledTitleAndTitleLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	text-decoration: none;
`;

const StyledTitle = styled.div`
	font-family: "system-ui";
	font-size: 1.3rem;
	font-weight: bold;
	/* color: ${(props) => props.theme.textTitle}; */
	color: #c3d9ee;
`;

const StyledPlaceHolder = styled.div`
	flex: 1;
`;

const StyledHeaderItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const StyledDrawerItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1rem;
`;

export const Header: React.FC<any> = () => {
	const { t } = useTranslation();
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
	const [isDesktop, setIsDesktop] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);

	useEffect(() => {
		setIsDesktop(isDesktopOrLaptop);
	}, [isDesktopOrLaptop]);
	function showDrawer() {
		setOpenDrawer(true);
	}

	return (
		<div className="sticky top-0 z-10">
			<Banner />
			<HeaderContainer
				$isLargeScreen={isDesktop}
				className="header-container"
			>
				{isDesktop ? null : (
					<StyledHeaderItem onClick={showDrawer}>
						<AiOutlineMenu size={"1.5rem"} fill={"#c3d9ee"} />
					</StyledHeaderItem>
				)}
				<motion.div
					initial={{ y: -50, opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: { duration: 0.6, type: "spring" },
					}}
				>
					<BasicLogo2022 size={"48px"} />
				</motion.div>
				<motion.div
					initial={{ y: -50, opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: { duration: 0.6, type: "spring" },
					}}
				>
					<StyledTitleAndTitleLink href="/">
						<StyledTitle className="header-item">
							{t("header.title")}
						</StyledTitle>
					</StyledTitleAndTitleLink>
				</motion.div>
				<StyledPlaceHolder />
				{isDesktop ? (
					<motion.div
						initial={{ y: -50, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { duration: 0.6, type: "spring" },
						}}
					>
						<StyledHeaderItem>
							<LanguageDropdown color={"#c3d9ee"} />
						</StyledHeaderItem>
					</motion.div>
				) : null}
			</HeaderContainer>
			{isDesktop ? null : (
				<PageDrawer
					openDrawer={openDrawer}
					setOpenDrawer={setOpenDrawer}
				/>
			)}
		</div>
	);
};
