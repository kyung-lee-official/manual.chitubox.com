"use client";

import { motion } from "framer-motion";
import React from "react";
import { Load } from "../icons/Icons";

export type ButtonType = "regular" | "settings" | "link";

export type ButtonLevel = "regular" | "danger";

type BaseButtonProps = {
	className?: string;
	buttonType?: ButtonType;
	buttonLevel?: ButtonLevel;
	href?: string;
	disabled?: boolean;
	children?: any;
	isLoading?: boolean;
	onClick?: () => void;
};

type NativeButtonProps = BaseButtonProps &
	React.ButtonHTMLAttributes<HTMLElement>;

export const Button: React.FC<NativeButtonProps> = (props) => {
	const {
		children,
		buttonType = "regular",
		buttonLevel = "regular",
		href,
		disabled,
		isLoading,
		onClick,
	} = props;

	let buttonLevelClass = "";
	switch (buttonLevel) {
		case "regular":
			buttonLevelClass = "bg-green-500 hover:bg-green-600";
			break;
		case "danger":
			buttonLevelClass = "bg-red-500 hover:bg-red-600";
			break;
		default:
			buttonLevelClass = "bg-green-500 hover:bg-green-600";
			break;
	}

	if (buttonType === "settings") {
		if (isLoading) {
			return (
				<button
					className={`flex justify-center items-center px-3 py-1
					text-gray-400 bg-gray-300
					rounded
					cursor-not-allowed
					transition-all duration-150`}
					disabled={disabled}
				>
					<motion.div
						className="text-slate-400"
						initial={{ rotateZ: 0 }}
						animate={{ rotateZ: 360 }}
						transition={{
							repeat: Infinity,
							duration: 1.5,
						}}
					>
						<Load size={24} />
					</motion.div>
				</button>
			);
		}

		return (
			<button
				className={`flex justify-center items-center px-3 py-1
				${disabled ? "text-gray-400" : "text-gray-200 hover:text-gray-100"}
				${disabled ? "bg-gray-300" : buttonLevelClass}
				rounded
				${disabled ? "cursor-not-allowed" : "cursor-pointer"}
				transition-all duration-150`}
				disabled={disabled}
				onClick={onClick}
			>
				{children ? children : null}
			</button>
		);
	} else if (buttonType === "regular") {
		if (isLoading) {
			return (
				<button
					className={`flex justify-center items-center px-3 py-1
					text-gray-400 bg-gray-300
					rounded-xl
					cursor-not-allowed
					transition-all duration-150`}
					disabled={disabled}
				>
					<motion.div
						className="text-slate-400"
						initial={{ rotateZ: 0 }}
						animate={{ rotateZ: 360 }}
						transition={{
							repeat: Infinity,
							duration: 1.5,
						}}
					>
						<Load size={24} />
					</motion.div>
				</button>
			);
		}

		return (
			<button
				className={`flex justify-center items-center px-3 py-1
				${disabled ? "text-gray-400" : "text-gray-200 hover:text-gray-100"}
				${disabled ? "bg-gray-300" : buttonLevelClass}
				rounded-xl
				${disabled ? "cursor-not-allowed" : "cursor-pointer"}
				transition-all duration-150`}
				disabled={disabled}
				onClick={onClick}
			>
				{children ? children : null}
			</button>
		);
	} else {
		/* buttonType is "link" */
		return (
			<a
				href={href}
				className={`flex justify-center items-center px-3 py-1 my-2 gap-2
                text-gray-200 hover:text-gray-100
                bg-blue-500 hover:bg-blue-600
				rounded-md shadow-md max-w-fit
				transition-all duration-150`}
			>
				{children ? children : null}
			</a>
		);
	}
};
