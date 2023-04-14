import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import {
	AiOutlineMenu,
	BasicLogo2022,
	DocsDrawer,
	DocsSearch,
	LanguageDropdown,
	ThemeSwitch,
	VersionDropdown,
} from "..";
import { DocContext } from "../docsLayout";

const HeaderContainer = (props: any) => {
	const { children } = props;

	return (
		<div
			className={`sticky flex justify-between items-center gap-6 top-0 z-10 h-16 px-16 
            text-2xl font-sans
            text-gray-700 dark:text-gray-200
            bg-gray-50/40 dark:bg-gray-800/40
            shadow-md backdrop-blur-md
            transition-colors duration-300`}
		>
			{children}
		</div>
	);
};

const HeaderItem = (props: any) => {
	const { children } = props;
	return (
		<div className="flex justify-center items-center cursor-pointer">
			{children}
		</div>
	);
};

export const InstanceTitles = (props: any) => {
	const { showActiveOnly } = props;
	const router = useRouter();
	const {
		localizedContext,
		docInstanceContext: { docInstanceName },
	} = useContext(DocContext);
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
	const [isDesktop, setIsDesktop] = useState<boolean>(true);

	useEffect(() => {
		setIsDesktop(isDesktopOrLaptop);
	}, [isDesktopOrLaptop]);

	if (isDesktop) {
		if (showActiveOnly) {
			const activeInstance = localizedContext.localizedDocInstances.find(
				(instance: any) => {
					return instance.docInstanceName === docInstanceName;
				}
			);
			return (
				<div
					className={`text-xl text-blue-500`}
					onClick={() => {
						router.push(
							activeInstance.versionedContexts[0].pagesContext[0]
								.path
						);
					}}
				>
					{activeInstance.docInstanceName}
				</div>
			);
		} else {
			return (
				<div
					className="flex gap-6
			        text-xl"
				>
					{localizedContext.localizedDocInstances.map(
						(instance: any, i: number) => {
							let isActive: boolean =
								instance.docInstanceName === docInstanceName
									? true
									: false;
							return (
								<div
									key={i}
									className={`${isActive && "text-blue-500"}`}
									onClick={() => {
										router.push(
											instance.versionedContexts[0]
												.pagesContext[0].path
										);
									}}
								>
									{instance.docInstanceName}
								</div>
							);
						}
					)}
				</div>
			);
		}
	} else {
		return null;
	}
};

export const DocsHeader = () => {
	const { t } = useTranslation();
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
	const {
		docInstanceContext: { isVersioned },
	} = useContext(DocContext);
	const [isDesktop, setIsDesktop] = useState<boolean>(true);
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);

	function showDrawer() {
		setOpenDrawer(true);
	}

	useEffect(() => {
		setIsDesktop(isDesktopOrLaptop);
	}, [isDesktopOrLaptop]);

	return (
		<HeaderContainer>
			{!isDesktop && (
				<div onClick={showDrawer}>
					<AiOutlineMenu size={"1.5rem"} />
				</div>
			)}
			<div>
				<BasicLogo2022 size={"48px"} />
			</div>
			<a
				href="/"
				className="flex justify-center items-center gap-2 no-underline"
			>
				{t("header.title")}
			</a>
			<div className="flex justify-center items-center cursor-pointer">
				<InstanceTitles showActiveOnly={false} />
			</div>
			<div className="flex-1" />
			{isDesktop && (
				<div className="flex gap-6">
					<HeaderItem>
						<DocsSearch />
					</HeaderItem>
					{isVersioned && (
						<HeaderItem>
							<VersionDropdown />
						</HeaderItem>
					)}
					<HeaderItem>
						<ThemeSwitch />
					</HeaderItem>
					<HeaderItem>
						<LanguageDropdown />
					</HeaderItem>
				</div>
			)}
			{!isDesktop && (
				<DocsDrawer
					openDrawer={openDrawer}
					setOpenDrawer={setOpenDrawer}
				/>
			)}
		</HeaderContainer>
	);
};
