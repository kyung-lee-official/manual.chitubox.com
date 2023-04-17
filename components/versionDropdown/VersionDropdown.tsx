import React, { useContext } from "react";
import { Dropdown, MenuProps } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { DocContext } from "../docsLayout/DocContext";
import { TbVersions } from "../icons/Icons";

export const VersionDropdown: React.FC<any> = () => {
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
	const router = useRouter();
	const { docInstanceContext } = useContext(DocContext);

	const versionMenuItems: MenuProps["items"] =
		docInstanceContext.versionedContexts.map(
			(versionedContext: any, i: any) => {
				return {
					label: (
						<Link href={versionedContext.pagesContext[0].path}>
							{versionedContext.versionCode}
						</Link>
					),
					key: versionedContext.versionCode,
				};
			}
		);
	return (
		<Dropdown
			menu={{ items: versionMenuItems }}
			placement={isDesktopOrLaptop ? "bottomRight" : "bottomLeft"}
			dropdownRender={(menus: any) => {
				if (menus) {
					const { items } = menus.props;
					return (
						<div
							className={`relative flex flex-col justify-center gap-2 items-center top-2 p-3
                                font-bold text-base text-gray-800 dark:text-gray-50
                                bg-gray-50/30 dark:bg-gray-700/30 backdrop-blur-md
                                shadow-lg rounded-md`}
						>
							{items.map((item: any) => {
								const { children, href } = item.label.props;
								return (
									<div
										className={`flex justify-center items-center
                                            hover:text-sky-400
                                            cursor-pointer`}
										key={item.key}
										onClick={() => {
											router.push(href);
										}}
									>
										{children}
									</div>
								);
							})}
						</div>
					);
				}
			}}
		>
			<div className="flex justify-center items-center cursor-pointer">
				<TbVersions size={32} />
			</div>
		</Dropdown>
	);
};
