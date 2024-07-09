"use client";

import React, { useState } from "react";
import { CollapseIcon } from "@/components/icons/Icons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface CollapseProps {
	children: React.ReactNode;
	title: string;
}

export const Collapse = ({ children, title }: CollapseProps) => {

	const t = useTranslations("docComponents.collapse");

	const [show, setShow] = useState(false);
	const [rotate, setRotate] = useState(false);
	const [expand, setExpand] = useState(false);
	const [hide, setHide] = useState(false);

	return (
		<div className="border border-gray-200 dark:border-gray-800 rounded-lg">
			<button
				className="flex w-full py-3 px-4 bg-gray-100 dark:bg-gray-900 rounded-t-lg"
				onClick={() => {
					setShow(!show);
					setRotate(!rotate);
					setExpand(!expand);
					setHide(!hide);
				}}
			>
				<div className="flex flex-auto items-center">
					<div
						className={`px-3 ${rotate && `transform rotate-90`} duration-100`}>
						<CollapseIcon />
					</div>
					{title}
					<p className="flex-auto text-right text-xs text-gray-400">
						{!expand && t(`expand`)}
						{hide && t(`hide`)}
					</p>
				</div>
			</button>
			{show &&
				<motion.div
					className="px-6 origin-top"
					initial={{ opacity: 0, scaleY: 0 }}
					animate={{ opacity: 1, scaleY: 1 }}
				>
					{children}
				</motion.div>
			}
		</div>
	);
};
