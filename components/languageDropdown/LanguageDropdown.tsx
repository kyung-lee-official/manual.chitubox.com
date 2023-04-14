import { Dropdown, MenuProps } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { IoLanguage } from "..";
import { LanguageType, languageList, useLanguageStore } from "stores/language";

export const LanguageDropdown: React.FC<any> = () => {
	const router = useRouter();
	const { setLanguage } = useLanguageStore();

	const LanguageMenuItem: React.FC<any> = ({ pathname, languageObject }) => {
		const isOneField: boolean = isRoutePathOneFieldOnly(pathname);
		function onItemClick(event: any) {
			setLanguage(languageObject.code);
			if (isOneField) {
				router.push(`/${languageObject.urlCode}`);
			} else {
				router.push(
					`/${languageObject.urlCode}${pathname.substring(
						pathname.indexOf("/", 1)
					)}`
				);
			}
		}

		return <div onClick={onItemClick}>{languageObject.label}</div>;
	};

	const languageMenuItems: MenuProps["items"] = languageList.map(
		(languageObject: LanguageType) => {
			return {
				label: (
					<LanguageMenuItem
						pathname={router.pathname}
						languageObject={languageObject}
					/>
				),
				key: languageObject.label,
			};
		}
	);

	/**
	 * Check whether the route has one field only.
	 * example.com/en-US/ or example.com/en-US returns ture,
	 * example.com/en-US/xxx returns false.
	 * */
	function isRoutePathOneFieldOnly(pathname: string): boolean {
		let splitArray = pathname.split("/");
		if (splitArray.length == 2) {
			/* Path pattern: "/xxx" */
			return true;
		} else if (splitArray.length == 3 && splitArray[2] === "") {
			/* Path pattern: "/xxx/" */
			return true;
		} else {
			return false;
		}
	}

	return (
		<Dropdown
			menu={{ items: languageMenuItems }}
			placement="bottomRight"
			dropdownRender={(menus: any) => {
				if (menus) {
					const { items } = menus.props;
					return (
						<div
							className="relative flex flex-col justify-center gap-2 items-center top-2 p-3 min-w-fit
                            font-bold text-base text-gray-800 dark:text-gray-50
                            bg-gray-50/30 dark:bg-gray-700/30 backdrop-blur-md
                            shadow-lg rounded-md"
						>
							{items.map((item: any) => {
								const { languageObject } = item.label.props;
								const isOneField: boolean =
									isRoutePathOneFieldOnly(router.pathname);
								function onItemClick(event: any) {
									setLanguage(languageObject.locale);
									if (isOneField) {
										router.push(
											`/${languageObject.urlLocale}`
										);
									} else {
										router.push(
											`/${
												languageObject.urlLocale
											}${router.pathname.substring(
												router.pathname.indexOf("/", 1)
											)}`
										);
									}
								}
								return (
									<div
										className={`flex justify-center items-center
                                        hover:text-sky-400
                                        cursor-pointer`}
										key={item.key}
										onClick={onItemClick}
									>
										{item.key}
									</div>
								);
							})}
						</div>
					);
				}
			}}
		>
			<div className="flex justify-center items-center cursor-pointer">
				<IoLanguage size={"32px"} />
			</div>
		</Dropdown>
	);
};
