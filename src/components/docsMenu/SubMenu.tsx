import Link from "next/link";
import { useEffect, useState } from "react";
import { SubMenuToggle } from "../icons/Icons";
import { CategoryContext } from "@/utils/types";
import _ from "lodash";
import { AnimatePresence, motion } from "framer-motion";

export const SubMenu: React.FC<any> = (props: {
	categoryContext: CategoryContext;
	pathname: string;
	openKeys: string[];
	setOpenKeys: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
	const { categoryContext, pathname, openKeys, setOpenKeys } = props;

	const [hasActiveKey, setHasActiveKey] = useState(
		categoryContext.path === pathname ||
			categoryContext.subItems.some((subItem: any) => {
				return subItem.path === pathname;
			})
	);

	useEffect(() => {
		setHasActiveKey(
			categoryContext.path === pathname ||
				categoryContext.subItems.some((subItem: any) => {
					return subItem.path === pathname;
				})
		);

		if (
			categoryContext.path === pathname ||
			categoryContext.subItems.some((subItem: any) => {
				return subItem.path === pathname;
			})
		) {
			setOpenKeys(_.uniq([...openKeys, categoryContext.path]));
		}
	}, [pathname]);

	return (
		<div>
			<Link
				href={categoryContext.path}
				className={`flex justify-between items-center
				${hasActiveKey && "text-blue-500 dark:text-sky-400"}
				cursor-pointer`}
				onClick={() => {
					if (pathname === categoryContext.path) {
						setOpenKeys((prev) => {
							if (prev.includes(categoryContext.path)) {
								return prev.filter(
									(key) => key !== categoryContext.path
								);
							} else {
								return [...prev, categoryContext.path];
							}
						});
					}
				}}
			>
				<div>{categoryContext.label}</div>
				<div
					className={`flex justify-center items-center
					${openKeys.includes(categoryContext.path) && `transform rotate-90`}
					duration-100`}
				>
					<SubMenuToggle size={24} />
				</div>
			</Link>
			<AnimatePresence>
				{openKeys.includes(categoryContext.path) && (
					<motion.div
						initial={{ opacity: 0, y: -10, scaleY: 0.8 }}
						animate={{
							opacity: 1,
							y: 0,
							scaleY: 1,
							transition: { duration: 0.05 },
						}}
						exit={{
							opacity: 0,
							y: -10,
							scaleY: 0.8,
							transition: { duration: 0.05 },
						}}
						className="flex flex-col gap-2 list-none py-2 origin-top"
					>
						{categoryContext.subItems.map(
							(subItem: any, i: number) => {
								if (subItem.path === pathname) {
									return (
										<Link
											href={subItem.path}
											key={subItem.path}
										>
											<div className="pl-6 text-blue-500 dark:text-sky-400">
												{subItem.label}
											</div>
										</Link>
									);
								} else {
									return (
										<Link
											href={subItem.path}
											key={subItem.path}
										>
											<div className="pl-6">
												{subItem.label}
											</div>
										</Link>
									);
								}
							}
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
