import Link from "next/link";
import { useEffect, useState } from "react";
import { SubMenuToggle } from "../../icons/Icons";
import { CategoryContext } from "@/utils/types";
import _ from "lodash";

export const SubMenu = (props: {
	categoryContext: CategoryContext;
	pathname: string;
	openKeys: string[];
	setOpenKeys: React.Dispatch<React.SetStateAction<string[]>>;
	setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { categoryContext, pathname, openKeys, setOpenKeys, setShowMenu } =
		props;

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
				className={`flex justify-between items-center py-2
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
					duration-150`}
				>
					<SubMenuToggle size={24} />
				</div>
			</Link>
			{openKeys.includes(categoryContext.path) && (
				<ul
					className="flex flex-col list-none
					border-t-[1px] border-solid border-neutral-200 dark:border-neutral-700"
				>
					{categoryContext.subItems.map((subItem: any, i: number) => {
						return (
							<Link
								href={subItem.path}
								key={subItem.path}
								onClick={() => {
									setShowMenu(false);
								}}
							>
								<li
									className={`pl-3 py-2
									${subItem.path === pathname && "text-blue-500 dark:text-sky-400"}`}
								>
									{subItem.label}
								</li>
								{i < categoryContext.subItems.length - 1 && (
									<hr className="ml-3 dark:border-neutral-700" />
								)}
							</Link>
						);
					})}
				</ul>
			)}
		</div>
	);
};
