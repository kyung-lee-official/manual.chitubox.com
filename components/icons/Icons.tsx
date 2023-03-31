import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeType, dark, light } from "styles/themes";
import { RootState } from "../../redux/store";
import { changeTheme } from "../../redux/theme/slice";
import styled, { useTheme } from "styled-components";

export const Logo2021 = ({ size, fill }: any) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 238 238"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Layer-1">
				<ellipse
					id="path12"
					cx="118.705"
					cy="118.705"
					rx="53.609"
					ry="118.705"
					fill={fill}
				/>
				<path
					id="path12-6"
					d="M237.409,118.705c0,29.587 -53.19,53.609 -118.704,53.609c-65.515,-0 -118.705,-24.022 -118.705,-53.609c-0,-29.588 53.19,-53.609 118.705,-53.609c65.514,-0 118.704,24.021 118.704,53.609Z"
					fill={fill}
				/>
			</g>
		</svg>
	);
};

export const BasicLogo2022 = ({ size, fill }: any) => {
	return (
		<svg
			width={size}
			height={size}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 300 300"
			className="header-item"
			href="/"
		>
			<defs>
				<linearGradient
					id="linear-gradient"
					x1="23.52"
					y1="23.52"
					x2="276.47"
					y2="276.47"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.21" stopColor="#6cbffb" />
					<stop offset="0.35" stopColor="#63a7fc" />
					<stop offset="0.71" stopColor="#4c68fe" />
					<stop offset="0.88" stopColor="#4350ff" />
				</linearGradient>
				<linearGradient
					id="linear-gradient-2"
					x1="150"
					y1="33.56"
					x2="150"
					y2="287.8"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.22" stopColor="#fff" />
					<stop offset="0.47" stopColor="#ececec" />
					<stop offset="0.95" stopColor="#bfbfbf" />
				</linearGradient>
			</defs>
			<g id="bg">
				<rect width="300" height="300" fill="none" />
			</g>
			<g id="Layer_1" data-name="Layer 1">
				<rect
					x="12.5"
					y="12.5"
					width="275"
					height="275"
					rx="60"
					fill="url(#linear-gradient)"
				/>
			</g>
			<g id="Layer_2" data-name="Layer 2">
				<path
					d="M41,150c0,20.76,25.29,38.67,61.92,47.09C111.3,233.71,129.24,259,150,259s38.66-25.29,47.09-61.93C233.71,188.65,259,170.74,259,150s-25.29-38.67-61.91-47.09C188.66,66.26,170.72,41,150,41s-38.7,25.29-47.08,61.92C66.29,111.31,41,129.22,41,150Z"
					fill="url(#linear-gradient-2)"
				/>
			</g>
		</svg>
	);
};

export const Shop = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={fill}
				d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"
			></path>
		</svg>
	);
};

export const Document = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={fill}
				d="m19.707 7.293-4-4A.996.996 0 0 0 15 3H7C5.346 3 4 4.346 4 6v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V8a.996.996 0 0 0-.293-.707zM17.586 8H16.5c-.827 0-1.5-.673-1.5-1.5V5.414L17.586 8zM17 19H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7v1.5C14 7.879 15.121 9 16.5 9H18v9a1 1 0 0 1-1 1z"
			></path>
		</svg>
	);
};

export const Community = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fill="none" d="M0 0h24v24H0z"></path>
			<path
				fill={fill}
				d="M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754V19zm2-8h2v2h-2v-2zm0 4h2v2h-2v-2zm0-8h2v2h-2V7zm-4 0h2v2h-2V7z"
			></path>
		</svg>
	);
};

export const More = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fill="none" d="M0 0h24v24H0V0z"></path>
			<path
				fill={fill}
				d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14z"
			></path>
			<circle fill={fill} cx="9" cy="12" r="1.5"></circle>
			<circle fill={fill} cx="14" cy="12" r="1.5"></circle>
			<circle fill={fill} cx="19" cy="12" r="1.5"></circle>
		</svg>
	);
};

export const Taobao = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fill={fill} d="M0 0h24v24H0z"></path>
			<path d="m3.576 8.277-1.193 1.842 2.2 1.371s1.464.754.763 2.169c-.65 1.338-3.846 4.27-3.846 4.27l2.862 1.798c1.984-4.326 1.85-3.75 2.347-5.306.512-1.58.624-2.794-.242-3.677-1.113-1.125-1.238-1.23-2.891-2.467zm1.564-.694c1.04 0 1.883-.758 1.883-1.693 0-.943-.843-1.701-1.883-1.701-1.048 0-1.887.762-1.887 1.701.005.931.84 1.693 1.887 1.693zm17.005.21s-.624-4.87-11.207-1.854c.455-.795.669-1.307.669-1.307l-2.64-.75s-1.07 3.508-2.972 5.14c0 0 1.846 1.073 1.826 1.04a17.07 17.07 0 0 0 1.407-1.596c.424-.19.83-.363 1.226-.524-.492.887-1.278 2.218-2.068 3.056l1.112.984s.762-.738 1.589-1.62h.943v1.636H8.345v1.306h3.685v3.133l-.14-.004c-.408-.02-1.037-.089-1.287-.484-.298-.484-.077-1.359-.064-1.903H7.995l-.093.052s-.935 4.205 2.689 4.113c3.386.092 5.33-.956 6.265-1.677l.37 1.394 2.09-.882-1.416-3.484-1.693.536.314 1.19c-.427.33-.93.572-1.467.754v-2.738h3.592v-1.31h-3.592v-1.637h3.604V9.051h-6.41c.464-.569.822-1.089.92-1.415l-1.122-.307c4.798-1.733 7.47-1.435 7.45 1.403v7.475s.283 2.564-2.636 2.383l-1.58-.343-.367 1.512s6.817 1.967 7.374-3.314c.552-5.282-.142-8.652-.142-8.652z"></path>
		</svg>
	);
};

export const GoSearch = ({ size, fill }: any) => {
	const reduxTheme = useSelector(
		(state: RootState) => state.theme.currentTheme
	);
	const control = useAnimationControls();

	useEffect(() => {
		control.start({
			fill: fill
				? fill
				: reduxTheme === "dark"
				? dark.headerIcons
				: light.headerIcons,
			transition: { duration: 0.7 },
		});
	}, [reduxTheme, control, fill]);

	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 16 16"
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			xmlns="http://www.w3.org/2000/svg"
			cursor={"pointer"}
		>
			<motion.path
				initial={{
					fill: fill
						? fill
						: reduxTheme === "dark"
						? dark.headerIcons
						: light.headerIcons,
				}}
				animate={control}
				fillRule="evenodd"
				d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
			/>
		</svg>
	);
};

export const IoLanguage = ({ size, fill }: any) => {
	const reduxTheme = useSelector(
		(state: RootState) => state.theme.currentTheme
	);
	const control = useAnimationControls();

	useEffect(() => {
		control.start({
			fill: fill
				? fill
				: reduxTheme === "dark"
				? dark.headerIcons
				: light.headerIcons,
			transition: { duration: 0.7 },
		});
	}, [reduxTheme, control, fill]);

	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
		>
			<motion.path
				initial={{
					fill: fill
						? fill
						: reduxTheme === "dark"
						? dark.headerIcons
						: light.headerIcons,
				}}
				animate={control}
				d="M478.33 433.6l-90-218a22 22 0 00-40.67 0l-90 218a22 22 0 1040.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 00458 464a22 22 0 0020.32-30.4zM334.83 362L368 281.65 401.17 362zm-66.99-19.08a22 22 0 00-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 000-44H214V70a22 22 0 00-44 0v20H54a22 22 0 000 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 00-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1021.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0030.75-4.9z"
			/>
		</svg>
	);
};

export const AiOutlineMenu = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 1024 1024"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={fill}
				d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
			></path>
		</svg>
	);
};

export const TbVersions = ({ size, fill }: any) => {
	const reduxTheme = useSelector(
		(state: RootState) => state.theme.currentTheme
	);
	const control = useAnimationControls();

	useEffect(() => {
		control.start({
			stroke: fill
				? fill
				: reduxTheme === "dark"
				? dark.headerIcons
				: light.headerIcons,
			transition: { duration: 0.7 },
		});
	}, [reduxTheme, control, fill]);

	return (
		<motion.svg
			height={size}
			width={size}
			// viewBox="0 0 24 24"
			viewBox="2 1 20 21"
			fill="none"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			xmlns="http://www.w3.org/2000/svg"
			initial={{
				stroke: fill
					? fill
					: reduxTheme === "dark"
					? dark.headerIcons
					: light.headerIcons,
			}}
			animate={control}
		>
			<rect x="10" y="5" width="10" height="14" rx="2"></rect>
			<line x1="7" y1="7" x2="7" y2="17"></line>
			<line x1="4" y1="8" x2="4" y2="16"></line>
		</motion.svg>
	);
};

export const ThemeSwitch: React.FC<any> = () => {
	const strokeWidth: string = "23px";
	let shapes = useMemo(() => {
		return [
			/* Sun */
			{
				d: "M204.116 118.756C221.372 148.644 211.132 186.861 181.244 204.116C151.356 221.372 113.139 211.132 95.8835 181.244C78.6279 151.356 88.8681 113.139 118.756 95.8835C148.644 78.6279 186.861 88.8681 204.116 118.756Z",
			},
			/* Moon */
			{
				d: "M 140 154 C 211 253 279.601 228.146 216.238 264.728 C 152.876 301.311 71.8543 279.601 35.2719 216.238 C -1.3105 152.876 20.3991 71.8543 83.7617 35.2719 C 147.124 -1.3105 83 50 140 154 Z",
			},
		];
	}, []);

	/* Get current theme in Redux Store. */
	const reduxTheme = useSelector(
		(state: RootState) => state.theme.currentTheme
	);
	const dispatch = useDispatch();
	const [isDark, setIsDark] = useState<boolean>(
		reduxTheme === "dark" ? true : false
	);
	const lightThemeColor: string = light.headerIcons;
	const darkThemeColor: string = dark.headerIcons;
	const [isComponentDark, setIsComponentDark] = useState<boolean>(isDark);
	const [isLock, setIsLock] = useState<boolean>(false);
	const morphControls = useAnimationControls();
	const rayControls = useAnimationControls();

	function changeReduxTheme() {
		if (!isLock) {
			setIsLock(true);
			const targetTheme: "dark" | "light" =
				reduxTheme === "dark" ? "light" : "dark";
			dispatch(changeTheme(targetTheme));
		}
	}

	useEffect(() => {
		if (reduxTheme === "dark") {
			setIsDark(true);
		} else {
			setIsDark(false);
		}
	}, [reduxTheme]);

	useEffect(() => {
		if (isDark !== isComponentDark) {
			if (isDark) {
				/* Light to dark */
				morphControls.start({
					d: [shapes[0].d, shapes[1].d],
					stroke: darkThemeColor,
					transition: { duration: 0.5, delay: 0.3 },
				});
				rayControls.start({
					opacity: 0,
				});
			} else {
				/* Dark to light */
				morphControls.start({
					d: [shapes[1].d, shapes[0].d],
					stroke: lightThemeColor,
					transition: { duration: 0.5 },
				});
				rayControls.start({
					opacity: 1,
					transition: { delay: 0.5 },
				});
			}
			setIsComponentDark(isDark);
		}
	}, [
		isDark,
		darkThemeColor,
		lightThemeColor,
		isComponentDark,
		morphControls,
		rayControls,
		shapes,
	]);

	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 300 300"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={changeReduxTheme}
			cursor={"pointer"}
		>
			<motion.path
				strokeWidth={strokeWidth}
				initial={{
					stroke: isDark ? darkThemeColor : lightThemeColor,
					d: isDark ? shapes[1].d : shapes[0].d,
				}}
				animate={morphControls}
				onAnimationComplete={(definition) => {
					setIsLock(false);
				}}
			/>
			<motion.path
				d="M150 50V10"
				stroke="black"
				strokeWidth={strokeWidth}
				strokeMiterlimit="10"
				strokeLinecap="round"
				initial={{ opacity: isDark ? 0 : 1 }}
				animate={rayControls}
			/>
			<motion.path
				d="M80 80L51 51"
				stroke="black"
				strokeWidth={strokeWidth}
				strokeMiterlimit="10"
				strokeLinecap="round"
				initial={{ opacity: isDark ? 0 : 1 }}
				animate={rayControls}
			/>
			<motion.path
				d="M50 150H10"
				stroke="black"
				strokeWidth={strokeWidth}
				strokeMiterlimit="10"
				strokeLinecap="round"
				initial={{ opacity: isDark ? 0 : 1 }}
				animate={rayControls}
			/>
			<motion.path
				d="M80 220L51 249"
				stroke="black"
				strokeWidth={strokeWidth}
				strokeMiterlimit="10"
				strokeLinecap="round"
				initial={{ opacity: isDark ? 0 : 1 }}
				animate={rayControls}
			/>
			<motion.path
				d="M150 250V290"
				stroke="black"
				strokeWidth={strokeWidth}
				strokeMiterlimit="10"
				strokeLinecap="round"
				initial={{ opacity: isDark ? 0 : 1 }}
				animate={rayControls}
			/>
			<motion.path
				d="M220 220L249 249"
				stroke="black"
				strokeWidth={strokeWidth}
				strokeMiterlimit="10"
				strokeLinecap="round"
				initial={{ opacity: isDark ? 0 : 1 }}
				animate={rayControls}
			/>
			<motion.path
				d="M250 150H290"
				stroke="black"
				strokeWidth={strokeWidth}
				strokeMiterlimit="10"
				strokeLinecap="round"
				initial={{ opacity: isDark ? 0 : 1 }}
				animate={rayControls}
			/>
			<motion.path
				d="M220 80L249 51"
				stroke="black"
				strokeWidth={strokeWidth}
				strokeMiterlimit="10"
				strokeLinecap="round"
				initial={{ opacity: isDark ? 0 : 1 }}
				animate={rayControls}
			/>
		</svg>
	);
};

export const Lightbulb = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 16 16"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"></path>
		</svg>
	);
};

export const InfoCircle = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 16 16"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
			<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
		</svg>
	);
};

export const Warning = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M10.9 2.78a2.25 2.25 0 0 1 2.98.74l.09.14 7.76 14A2.25 2.25 0 0 1 19.9 21H4.24a2.25 2.25 0 0 1-2.04-3.19l.07-.14 7.76-14.01c.2-.37.5-.67.88-.88zM12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-8a1 1 0 0 0-1 .88v5.24a1 1 0 0 0 2 0V8.88A1 1 0 0 0 12 8z"></path>
		</svg>
	);
};

export const Dangerous = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fill="none" d="M0 0h24v24H0z"></path>
			<path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM17 15.74 15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12 17 15.74z"></path>
		</svg>
	);
};

export const SubMenuToggle = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 20 20"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 0 1 0 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"></path>
		</svg>
	);
};

export const DrawerClose = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 512 512"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
		</svg>
	);
};

export const WindowsIcon = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m3 5.557 7.357-1.002.004 7.097-7.354.042L3 5.557zm7.354 6.913.006 7.103-7.354-1.011v-6.14l7.348.048zm.892-8.046L21.001 3v8.562l-9.755.077V4.424zm9.758 8.113-.003 8.523-9.755-1.378-.014-7.161 9.772.016z"></path>
		</svg>
	);
};

export const MacOSIcon = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path>
		</svg>
	);
};

export const LinuxIcon = ({ size, fill }: any) => {
	return (
		<svg
			height={size}
			width={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 0 0-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 0 0-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 0 1-.004-.021l-.004-.024a1.807 1.807 0 0 1-.15.706.953.953 0 0 1-.213.335.71.71 0 0 0-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 0 0-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 0 0-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 0 0-.205.334 1.18 1.18 0 0 0-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 0 1-.018-.2v-.02a1.772 1.772 0 0 1 .15-.768 1.08 1.08 0 0 1 .43-.533.985.985 0 0 1 .594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 0 0-.166-.267.248.248 0 0 0-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 0 0-.12.27.944.944 0 0 0-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 0 1-.131.068 2.62 2.62 0 0 1-.275-.402 1.772 1.772 0 0 1-.155-.667 1.759 1.759 0 0 1 .08-.668 1.43 1.43 0 0 1 .283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 0 1 .016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 0 1-.448-.067 3.566 3.566 0 0 1-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 0 0-.402-.533 1.45 1.45 0 0 0-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 0 0 .314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 0 1 .647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 0 1-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"></path>
		</svg>
	);
};

/* CHITUBOX Icons */

const StyledSvg = styled.svg`
	filter: drop-shadow(-30px -10px 3rem hsla(180, 100%, 50%, 0.8))
		drop-shadow(30px 10px 3rem hsla(269, 100%, 50%, 0.8));
`;

export const RmaIcon = ({ size, fill }: any) => {
	return (
		<StyledSvg
			height={size}
			width={size}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 23.98 21.46"
		>
			<defs>
				<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop
						offset="0%"
						style={{
							stopColor: "#0cf",
							stopOpacity: "1",
						}}
					/>
					<stop
						offset="100%"
						style={{ stopColor: "#ea00ff", stopOpacity: "1" }}
					/>
				</linearGradient>
			</defs>
			<g fill={"url(#grad1)"}>
				<path
					d="M9.76,15a4.68,4.68,0,0,1,.94-5.27L14,6.38l3.31,3.3a4.69,4.69,0,0,1,1.36,3.05,9.14,9.14,0,0,0,2-1.35,6.85,6.85,0,0,0-1.83-3.25L14,3.27,9.14,8.13A6.87,6.87,0,0,0,7.3,14.54,6.24,6.24,0,0,0,9.76,15Z"
					transform="translate(-2 -3.27)"
				/>
				<path
					d="M18.6,13.81a4.67,4.67,0,0,1-7.9,2.48,3.15,3.15,0,0,1-.35-.38A17.84,17.84,0,0,1,7.82,16a6.72,6.72,0,0,0,1.32,1.85h0a6.86,6.86,0,0,0,9.72,0h0a6.86,6.86,0,0,0,2-5.14A20.65,20.65,0,0,1,18.6,13.81Z"
					transform="translate(-2 -3.27)"
				/>
				<ellipse cx="21.24" cy="8.07" rx="0.96" ry="1.93" />
				<ellipse cx="21.24" cy="8.07" rx="1.93" ry="0.96" />
				<path
					d="M23.91,8.94a2.71,2.71,0,0,1,.56,1.17,3.17,3.17,0,0,1,.88.35A2.24,2.24,0,0,0,26,8.55c-.45-1.66-3.88-2.27-8.38-1.7l.7.69C21.25,7.33,23.45,7.82,23.91,8.94Z"
					transform="translate(-2 -3.27)"
				/>
				<path
					d="M22,12.57a4.1,4.1,0,0,1-.59-.2,24.41,24.41,0,0,1-6.53,2.7C9.39,16.54,4.53,16.25,4,14.42c-.3-1.13,1.12-2.58,3.53-3.87l.55-1.12c-4,1.74-6.5,3.9-6.07,5.52.59,2.2,6.42,2.55,13,.78A30.84,30.84,0,0,0,22.13,13,2.91,2.91,0,0,1,22,12.57Z"
					transform="translate(-2 -3.27)"
				/>
				<path
					d="M6.8,20c1.6,0,2.41.46,2.4,1.39a1.1,1.1,0,0,1-.26.74,2.11,2.11,0,0,1-.73.53l1.71,2.05H8.12L6.87,23h-.4v1.72H4.88V20Zm0,1H6.47v1.08h.3a1.28,1.28,0,0,0,.6-.13.47.47,0,0,0,.23-.46.41.41,0,0,0-.19-.36A1.14,1.14,0,0,0,6.78,21Z"
					transform="translate(-2 -3.27)"
				/>
				<path
					d="M13,24.73l-1.2-3.39h0c0,.09,0,.21,0,.35s0,.32,0,.49,0,.34,0,.5v2.05H10.46V20h2.12l1.23,3.35h0L15.05,20h2.12v4.71H15.71V22.19q0-.26,0-.48c0-.16,0-.28,0-.36h0l-1.19,3.38Z"
					transform="translate(-2 -3.27)"
				/>
				<path
					d="M22.05,24.73l-.29-.88H19.85l-.3.88H17.8L19.72,20h2.12l1.95,4.73ZM21.17,22c0-.08-.06-.2-.11-.36l-.15-.48c-.05-.17-.09-.31-.11-.41,0,.1-.06.24-.1.4s-.1.31-.14.47-.09.28-.12.39l-.26.77h1.25Z"
					transform="translate(-2 -3.27)"
				/>
			</g>
		</StyledSvg>
	);
};

export const ChituboxMenu = ({ size, fill }: any) => {
	const { textContent } = useTheme() as ThemeType;

	return (
		<span style={{ margin: "0 0.3rem", verticalAlign: "middle" }}>
			<svg
				height={size}
				width={size}
				viewBox="0 0 20 16"
				xmlns="http://www.w3.org/2000/svg"
				fill={textContent}
			>
				<path
					d="M21,6H3A1,1,0,0,1,3,4H21a1,1,0,0,1,0,2Z"
					transform="translate(-2 -4.01)"
				/>
				<path
					d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
					transform="translate(-2 -4.01)"
				/>
				<path
					d="M21,20H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
					transform="translate(-2 -4.01)"
				/>
			</svg>
		</span>
	);
};

export const ChituboxAddMachine = ({ size, fill }: any) => {
	const { textContent } = useTheme() as ThemeType;

	return (
		<span style={{ margin: "0 0.3rem", verticalAlign: "middle" }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill={textContent}
			>
				<g transform="translate(3 3)">
					<g transform="translate(0 6)">
						<path
							d="M77,450H65a1,1,0,0,1,0-2H77a1,1,0,0,1,0,2Z"
							transform="translate(-64 -448)"
						/>
					</g>
					<g transform="translate(6)">
						<path
							d="M449,78a1,1,0,0,1-1-1V65a1,1,0,0,1,2,0V77A1,1,0,0,1,449,78Z"
							transform="translate(-448 -64)"
						/>
					</g>
				</g>
			</svg>
		</span>
	);
};

export const ChituboxSupport = ({ size, fill }: any) => {
	const { textContent } = useTheme() as ThemeType;

	return (
		<span style={{ margin: "0 0.3rem", verticalAlign: "middle" }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill={textContent}
			>
				<g transform="translate(-63 -13)">
					<g transform="translate(65 14.981)">
						<g transform="translate(0 16.019)">
							<path
								d="M19,1028H1a1,1,0,0,1-1-1v-2a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1v2A1,1,0,0,1,19,1028Z"
								transform="translate(0 -1024)"
							/>
						</g>
						<g transform="translate(3.025 0.019)">
							<path
								d="M205.977,7.361l-9.658,2.588a1,1,0,0,1-1.225-.708l-1.441-5.375a1,1,0,0,1,.708-1.225L204.019.053a1,1,0,0,1,1.225.708l1.441,5.375A1,1,0,0,1,205.977,7.361Z"
								transform="translate(-193.619 -0.019)"
							/>
						</g>
						<g transform="translate(1 4.521)">
							<path
								d="M66,299.6H64v-8.75a1,1,0,0,1,.514-.873l3.375-1.875.972,1.748L66,291.438Z"
								transform="translate(-64 -288.1)"
							/>
						</g>
						<g transform="translate(13.092 2.047)">
							<path
								d="M843.808,143.772h-2V133.95l-3.908-2.456,1.064-1.694,4.375,2.75a1,1,0,0,1,.467.847v10.375Z"
								transform="translate(-837.9 -129.8)"
							/>
						</g>
						<g transform="translate(9.673 5.711)">
							<path
								d="M622.427,374.608h-2v-5.592l-1.327-4.1,1.9-.616,1.375,4.25a.982.982,0,0,1,.048.308Z"
								transform="translate(-619.1 -364.3)"
							/>
						</g>
					</g>
				</g>
			</svg>
		</span>
	);
};

export const ChituboxFileConfig = ({ size, fill }: any) => {
	const { textContent } = useTheme() as ThemeType;

	return (
		<span style={{ margin: "0 0.3rem", verticalAlign: "middle" }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill={textContent}
			>
				<g transform="translate(-63 -13)">
					<g transform="translate(65 15)">
						<path d="M6.5,17.207V13.928A1,1,0,0,1,6.125,14H5a1,1,0,0,1,0-2H6.125a1,1,0,0,1,.373.072V10H5A1,1,0,0,1,5,8H8.294l5.279-3.048a1.347,1.347,0,0,1,1.347,0L16,5.576V4L11.992,0H.719A.719.719,0,0,0,0,.719V17.281A.719.719,0,0,0,.719,18H6.756A1.346,1.346,0,0,1,6.5,17.207ZM5,4h6a1,1,0,0,1,0,2H5A1,1,0,0,1,5,4Z" />
						<path
							d="M554.529,452.27l-4.754-2.745a1,1,0,0,0-1,0l-4.754,2.745a1,1,0,0,0-.5.866v5.489a1,1,0,0,0,.5.866l4.754,2.745a1,1,0,0,0,1,0l4.754-2.745a1,1,0,0,0,.5-.866v-5.489A1,1,0,0,0,554.529,452.27Zm-5.254,5.611a2,2,0,1,1,2-2A2,2,0,0,1,549.276,457.88Z"
							transform="translate(-535.029 -442.37)"
						/>
					</g>
				</g>
			</svg>
		</span>
	);
};
