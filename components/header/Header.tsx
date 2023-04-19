import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineMenu, BasicLogo2022 } from "../icons/Icons";
import { LanguageDropdown } from "../languageDropdown/LanguageDropdown";
import { PageDrawer } from "../pageDrawer/PageDrawer";
import { Banner } from "@/docComponents/advertisement/Banner";

const HeaderContainer = (props: any) => {
	const { children } = props;

	return (
		<div
			className={`flex justify-between items-center gap-6 h-16 px-16
            text-2xl font-sans
            text-blue-200
            bg-slate-800
            shadow-md
            transition-colors duration-300`}
		>
			{children}
		</div>
	);
};

const Header: React.FC<any> = () => {
	const { t } = useTranslation();
	const [openDrawer, setOpenDrawer] = useState(false);

	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
	const [isDesktop, setIsDesktop] = useState(isDesktopOrLaptop);
	useEffect(() => {
		setIsDesktop(isDesktopOrLaptop);
	}, [isDesktopOrLaptop]);

	function showDrawer() {
		setOpenDrawer(true);
	}

	return (
		<div className="sticky top-0 z-10">
			{<Banner />}
			<HeaderContainer>
				{!isDesktop && (
					<div onClick={showDrawer}>
						<AiOutlineMenu size={"1.5rem"} />
					</div>
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
					<Link href="/">
						<div>{t("header.title")}</div>
					</Link>
				</motion.div>
				<div className="flex-1" />
				{isDesktop ? (
					<motion.div
						initial={{ y: -50, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { duration: 0.6, type: "spring" },
						}}
					>
						<div>
							<LanguageDropdown color={"#c3d9ee"} />
						</div>
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

export default Header;
