import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { SubMenuToggle } from "..";

const SubMenu: React.FC<any> = (props) => {
	const { subItemContext, isDefaultOpen, activeKey } = props;
	const hasActiveKey: boolean =
		subItemContext.subItems.filter((subItem: any) => {
			return subItem.path === activeKey;
		}).length > 0;
	const [show, setShow] = useState<boolean>(isDefaultOpen);

	const subUlVariant = {
		hidden: {
			maxHeight: "0px",
		},
		visible: {
			maxHeight: "5000px",
			transition: {
				staggerChildren: 0.1,
				duration: 1,
			},
		},
	};
	const subItemVariant = {
		hidden: {
			opacity: 0,
			x: -10,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	};

	function onUlHeadClick(event: any) {
		setShow(!show);
	}

	return (
		<li className="p-0">
			<ul
				className={`flex justify-between items-center py-3 
                ${hasActiveKey && "text-green-500"}
                cursor-pointer`}
				onClick={onUlHeadClick}
			>
				<div>{subItemContext.label}</div>
				<motion.div
					className="flex justify-center items-center"
					initial={{ rotate: show ? 90 : 0 }}
					animate={{ rotate: show ? 90 : 0 }}
				>
					<SubMenuToggle size={"24px"} />
				</motion.div>
			</ul>
			{show ? (
				<motion.ul
					className="list-none p-0"
					initial="hidden"
					animate="visible"
					variants={hasActiveKey ? {} : subUlVariant}
				>
					{subItemContext.subItems.map((subItem: any, i: number) => {
						const isActiveItem: boolean =
							subItem.path === activeKey;
						return (
							<Link
								href={subItem.path}
								key={subItem.path}
								className="no-underline"
							>
								<motion.li
									variants={
										hasActiveKey ? {} : subItemVariant
									}
									className={`pl-6 ${
										isActiveItem && "text-green-500"
									}`}
								>
									{subItem.label}
								</motion.li>
							</Link>
						);
					})}
				</motion.ul>
			) : null}
		</li>
	);
};

export const DocsMenu: React.FC<any> = (props) => {
	const { menuItems, defaultOpenKeys, activeKey } = props;
	return (
		<ul
			className="flex flex-col px-6
            font-medium text-lg
            list-none"
		>
			{menuItems.map((item: any, i: number) => {
				if (!item.subItems) {
					const isActiveItem: boolean = item.path === activeKey;
					return (
						<Link href={item.path} key={item.path}>
							<motion.li
								className={`${
									isActiveItem && "text-green-500"
								}`}
							>
								{item.label}
							</motion.li>
						</Link>
					);
				} else {
					const isDefaultOpen: boolean =
						item.subItems.filter((subItem: any) => {
							for (const key of [...defaultOpenKeys, activeKey]) {
								if (subItem.path === key) {
									return true;
								}
							}
							return false;
						}).length > 0;
					return (
						<SubMenu
							key={i}
							subItemContext={item}
							isDefaultOpen={isDefaultOpen}
							activeKey={activeKey}
						/>
					);
				}
			})}
		</ul>
	);
};
