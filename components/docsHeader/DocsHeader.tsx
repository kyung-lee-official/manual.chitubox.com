import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { RootState } from "redux/store";
import styled from "styled-components";
import {
	AiOutlineMenu,
	Banner,
	BasicLogo2022,
	DocsSearch,
	LanguageDropdown,
	ThemeSwitch,
	VersionDropdown,
} from "..";
import { DocsDrawer } from "../docsDrawer/DocsDrawer";
import { DocContext } from "../docsLayout";
import { dark, light } from "styles/themes";

const StyledStickyHeaderContainer = styled.div`
	position: -webkit-sticky;
	position: sticky;
	top: 0px;
	z-index: 10;
`;

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
	color: ${(props) => props.theme.textTitle};
	background-color: ${(props) => props.theme.headerBackground};
	backdrop-filter: blur(4px);
	box-shadow: 0px 3px 6px ${(props) => props.theme.headerShadow};
	min-height: 4.5rem;
	transition-duration: ${(props) => props.theme.transitionDuration};
`;

const StyledTitleAndTitleLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
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

const StyledHeaderItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const StyledShadowDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 38px;
	height: 38px;
	border-radius: 16px;
	transition: 0.3s;
	&:hover {
		box-shadow: -3px -3px 8px ${(props) => props.theme.headerItemHighlight},
			3px 3px 8px ${(props) => props.theme.headerItemShadow};
		width: 48px;
		transition: 0.3s;
	}
`;

const InstanceTitleContainer = styled.div`
	display: flex;
	gap: 2.5rem;
	justify-content: space-between;
	align-items: center;
	font-size: 1.15rem;
	font-weight: bold;
	margin: 0 2rem;
`;

interface InstanceTitleProps {
	$isActive: boolean;
	$reduxTheme: string;
}
const InstanceTitle = styled.div<InstanceTitleProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => {
		if (props.$isActive) {
			return props.theme.sidebarActiveItem;
		} else {
			return props.theme.textTitle;
		}
	}};
	cursor: pointer;
`;

export const InstanceTitles: React.FC<any> = () => {
	const router = useRouter();
	const reduxTheme = useSelector((state: RootState) => state.theme);
	const {
		localizedContext,
		docInstanceContext: { docInstanceName },
	} = useContext(DocContext);
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });

	if (isDesktopOrLaptop) {
		return (
			<InstanceTitleContainer>
				{localizedContext.localizedDocInstances.map(
					(instance: any, i: number) => {
						let isActive: boolean;
						isActive =
							instance.docInstanceName === docInstanceName
								? true
								: false;
						return (
							<InstanceTitle
								$isActive={isActive}
								$reduxTheme={reduxTheme.currentTheme}
								key={i}
								onClick={() => {
									router.push(
										instance.versionedContexts[0]
											.pagesContext[0].path
									);
								}}
							>
								{instance.docInstanceName}
							</InstanceTitle>
						);
					}
				)}
			</InstanceTitleContainer>
		);
	} else {
		return null;
	}
};

export const DocsHeader = () => {
	const { t } = useTranslation();
	const reduxTheme = useSelector((state: RootState) => state.theme);
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
	const [openDrawer, setOpenDrawer] = useState(false);

	function showDrawer() {
		setOpenDrawer(true);
	}

	return (
		<StyledStickyHeaderContainer>
			<Banner />
			<StyledHeaderContainer $isLargeScreen={isDesktopOrLaptop}>
				{isDesktopOrLaptop ? null : (
					<StyledHeaderItem onClick={showDrawer}>
						<AiOutlineMenu
							size={"1.5rem"}
							fill={
								reduxTheme.currentTheme === "dark"
									? dark.textTitle
									: light.textTitle
							}
						/>
					</StyledHeaderItem>
				)}
				<StyledTitleAndTitleLink href="/">
					<BasicLogo2022 size={"48px"} />
				</StyledTitleAndTitleLink>
				<StyledTitleAndTitleLink href="/">
					<StyledTitle>{t("header.title")}</StyledTitle>
				</StyledTitleAndTitleLink>
				<StyledHeaderItem>
					<InstanceTitles />
				</StyledHeaderItem>
				<StyledPlaceHolder />
				{isDesktopOrLaptop ? (
					<>
						<StyledHeaderItem>
							<DocsSearch />
						</StyledHeaderItem>
						<StyledHeaderItem>
							<StyledShadowDiv>
								<VersionDropdown />
							</StyledShadowDiv>
						</StyledHeaderItem>
						<StyledHeaderItem>
							<StyledShadowDiv>
								<ThemeSwitch />
							</StyledShadowDiv>
						</StyledHeaderItem>
						<StyledHeaderItem>
							<StyledShadowDiv>
								<LanguageDropdown />
							</StyledShadowDiv>
						</StyledHeaderItem>
					</>
				) : null}
			</StyledHeaderContainer>
			{isDesktopOrLaptop ? null : (
				<DocsDrawer
					openDrawer={openDrawer}
					setOpenDrawer={setOpenDrawer}
				/>
			)}
		</StyledStickyHeaderContainer>
	);
};
