import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Hero from "@/components/hero/Hero";
import { getUrlLocale, useLanguageStore } from "stores/language";
import { Layout } from "@/components/layout/Layout";

const IndexPage = () => {
	const { language } = useLanguageStore();
	let urlLocale = getUrlLocale(language);
	const { t } = useTranslation();
	const router = useRouter();
	const buttonColor: string = "#87a8c7";
	const buttonHoverColor: string = "#c3d9ee";
	const initialButtonBoxShadow: string =
		"-0px -0px 0px #2d4a64, 0px 0px 0px #031629";
	const buttonBoxShadow: string =
		"-5px -5px 10px #2d4a64, 5px 5px 10px #031629";
	const buttonBoxHoverShadow: string =
		"-7px -7px 10px #2d4a64, 7px 7px 10px #031629";
	const [buttonBasicBoxShadow, setButtonBasicBoxShadow] =
		useState<string>(buttonBoxShadow);
	const [buttonProBoxShadow, setButtonProBoxShadow] =
		useState<string>(buttonBoxShadow);
	const [buttonFaqBoxShadow, setButtonFaqBoxShadow] =
		useState<string>(buttonBoxShadow);
	const [buttonBasicColor, setButtonBasicColor] =
		useState<string>(buttonColor);
	const [buttonProColor, setButtonProColor] = useState<string>(buttonColor);
	const [buttonFaqColor, setButtonFaqColor] = useState<string>(buttonColor);
	const [buttonBasicTransitionDuration, setButtonBasicTransitionDuration] =
		useState<number>(0.8);
	const [buttonProTransitionDuration, setButtonProTransitionDuration] =
		useState<number>(0.8);
	const [buttonFaqTransitionDuration, setButtonFaqTransitionDuration] =
		useState<number>(0.8);
	const [buttonBasicTransitionDelay, setButtonBasicTransitionDelay] =
		useState<number>(0.3);
	const [buttonProTransitionDelay, setButtonProTransitionDelay] =
		useState<number>(0.5);
	const [buttonFaqTransitionDelay, setButtonFaqTransitionDelay] =
		useState<number>(0.7);

	return (
		<Layout>
			<Hero />
			<div
				className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-10 h-80 xl:h-40
                bg-gray-900"
			>
				<motion.button
					initial={{
						opacity: 0,
						boxShadow: initialButtonBoxShadow,
					}}
					animate={{
						opacity: 1,
						color: buttonBasicColor,
						boxShadow: buttonBasicBoxShadow,
						transition: {
							delay: buttonBasicTransitionDelay,
							duration: buttonBasicTransitionDuration,
						},
					}}
					onHoverStart={() => {
						setButtonBasicColor(buttonHoverColor);
						setButtonBasicBoxShadow(buttonBoxHoverShadow);
					}}
					onHoverEnd={() => {
						setButtonBasicColor(buttonColor);
						setButtonBasicBoxShadow(buttonBoxShadow);
					}}
					className="flex justify-center items-center w-60 h-12
                    font-medium text-lg
                    rounded-full"
					onClick={() => {
						router.push(
							`/${urlLocale}/docs/chitubox-basic/latest/introduction`
						);
					}}
				>
					CHITUBOX Basic
				</motion.button>
				<motion.button
					initial={{
						opacity: 0,
						boxShadow: initialButtonBoxShadow,
					}}
					animate={{
						opacity: 1,
						color: buttonProColor,
						boxShadow: buttonProBoxShadow,
						transition: {
							delay: buttonProTransitionDelay,
							duration: buttonProTransitionDuration,
						},
					}}
					onHoverStart={() => {
						setButtonProColor(buttonHoverColor);
						setButtonProBoxShadow(buttonBoxHoverShadow);
					}}
					onHoverEnd={() => {
						setButtonProColor(buttonColor);
						setButtonProBoxShadow(buttonBoxShadow);
					}}
					className="flex justify-center items-center w-60 h-12
                    font-medium text-lg
                    rounded-full"
					onClick={() => {
						router.push(
							`/${urlLocale}/docs/chitubox-pro/latest/introduction`
						);
					}}
				>
					CHITUBOX Pro
				</motion.button>
				<motion.button
					initial={{
						opacity: 0,
						boxShadow: initialButtonBoxShadow,
					}}
					animate={{
						opacity: 1,
						color: buttonFaqColor,
						boxShadow: buttonFaqBoxShadow,
						transition: {
							delay: buttonFaqTransitionDelay,
							duration: buttonFaqTransitionDuration,
						},
					}}
					onAnimationComplete={() => {
						setButtonBasicTransitionDuration(0.25);
						setButtonProTransitionDuration(0.25);
						setButtonFaqTransitionDuration(0.25);
						setButtonBasicTransitionDelay(0);
						setButtonProTransitionDelay(0);
						setButtonFaqTransitionDelay(0);
					}}
					onHoverStart={() => {
						setButtonFaqColor(buttonHoverColor);
						setButtonFaqBoxShadow(buttonBoxHoverShadow);
					}}
					onHoverEnd={() => {
						setButtonFaqColor(buttonColor);
						setButtonFaqBoxShadow(buttonBoxShadow);
					}}
					className="flex justify-center items-center w-60 h-12
                    font-medium text-lg
                    rounded-full"
					onClick={() => {
						router.push(
							`/${urlLocale}/docs/faq/latest/chitubox-basic-faq`
						);
					}}
				>
					{t("footer.faqDoc")}
				</motion.button>
			</div>
		</Layout>
	);
};

export default IndexPage;
