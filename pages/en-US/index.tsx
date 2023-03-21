import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { getUrlLocale } from "redux/language/slice";
import { Layout } from "@/components/layout";
import Hero from "@/components/hero/Hero";

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 40px;
	height: 150px;
	padding-top: 1rem;
	background-color: #1c2d3f;
	@media (max-width: 1224px) {
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		height: 330px;
		padding: 0;
	}
`;

const StyledButton = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #8c8c8c;
	min-width: 230px;
	max-width: 9rem;
	height: 48px;
	font-family: "system-ui";
	font-size: large;
	font-weight: bold;
	border-radius: 24px;
	cursor: pointer;
`;

const IndexPage = () => {
	const reduxLanguageState = useSelector(
		(state: RootState) => state.language
	);
	let reduxUrlLocale = getUrlLocale(reduxLanguageState.currentLocale);
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
			<StyledContainer>
				<StyledButton
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
					onClick={() => {
						router.push(
							`/${reduxUrlLocale}/docs/chitubox-basic/latest/introduction`
						);
					}}
				>
					CHITUBOX Basic
				</StyledButton>
				<StyledButton
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
					onClick={() => {
						router.push(
							`/${reduxUrlLocale}/docs/chitubox-pro/latest/introduction`
						);
					}}
				>
					CHITUBOX Pro
				</StyledButton>
				<StyledButton
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
					onClick={() => {
						router.push(
							`/${reduxUrlLocale}/docs/faq/latest/chitubox-basic-faq`
						);
					}}
				>
					{t("footer.faqDoc")}
				</StyledButton>
			</StyledContainer>
		</Layout>
	);
};

export default IndexPage;
