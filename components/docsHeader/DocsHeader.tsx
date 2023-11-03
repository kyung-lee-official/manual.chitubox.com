import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AiOutlineMenu, BasicLogo2022 } from "../icons/Icons";
import { DocsDrawer } from "../docsDrawer/DocsDrawer";
import { LanguageDropdown } from "../languageDropdown/LanguageDropdown";
import { DocContext } from "../docsLayout/DocContext";
import { Banner } from "@/docComponents/advertisement/Banner";
import { motion } from "framer-motion";

const DynamicThemeSwitch = dynamic(
	() => import("@/components/icons/ThemeSwitch"),
	{
		ssr: false,
	}
);

const DynamicVersionDropdown = dynamic(
	() => import("@/components/versionDropdown/VersionDropdown"),
	{
		ssr: false,
	}
);

const DynamicDocsSearch = dynamic(
	() => import("@/components/docsSearch/DocsSearch"),
	{
		ssr: false,
	}
);

const HeaderContainer = (props: any) => {
	const { children } = props;

	return (
		<div
			className={`flex justify-between items-center gap-6 h-16 px-16 
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
		<motion.div
			className="flex justify-center items-center cursor-pointer"
			whileHover={{ scale: 1.1 }}
		>
			{children}
		</motion.div>
	);
};

export const InstanceTitles = (props: any) => {
	const { showActiveOnly } = props;
	const router = useRouter();
	const {
		localizedContext,
		docInstanceContext: { docInstanceName },
	} = useContext(DocContext);

	if (showActiveOnly) {
		const activeInstance = localizedContext.localizedDocInstances.find(
			(instance: any) => {
				return instance.docInstanceName === docInstanceName;
			}
		);
		return (
			<div
				className={`text-xl text-blue-500 dark:text-sky-400`}
				onClick={() => {
					router.push(
						activeInstance.versionedContexts[0].pagesContext[0].path
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
			        text-xl
                    cursor-default"
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
								className={`${isActive &&
									" text-blue-500 dark:text-sky-400"
									} cursor-pointer`}
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
};

const DocsHeader = (props: any) => {
	const { setShowBanner } = props;

	const { t } = useTranslation();
	const {
		docInstanceContext: { isVersioned },
	} = useContext(DocContext);
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);

	function showDrawer() {
		setOpenDrawer(true);
	}

	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
	const [isDesktop, setIsDesktop] = useState(isDesktopOrLaptop);
	useEffect(() => {
		setIsDesktop(isDesktopOrLaptop);
	}, [isDesktopOrLaptop]);

	return (
		<div className="sticky top-0 z-10">
			<Banner setShowBanner={setShowBanner} />
			<HeaderContainer>
				{!isDesktop && (
					<div onClick={showDrawer}>
						<AiOutlineMenu size={"1.5rem"} />
					</div>
				)}
				<div>
					<BasicLogo2022 size={"48px"} />
				</div>
				<Link
					href="/"
					className="flex justify-center items-center gap-2 no-underline"
				>
					{t("header.title")}
				</Link>
				{isDesktop && (
					<div className="flex justify-center items-center cursor-pointer">
						<InstanceTitles showActiveOnly={false} />
					</div>
				)}
				<div className="flex-1" />
				{isDesktop && (
					<div className="flex gap-6">
						<HeaderItem>
							<DynamicDocsSearch />
						</HeaderItem>
						{isVersioned && (
							<HeaderItem>
								<DynamicVersionDropdown />
							</HeaderItem>
						)}
						<HeaderItem>
							<DynamicThemeSwitch />
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
		</div>
	);
};

export default DocsHeader;
