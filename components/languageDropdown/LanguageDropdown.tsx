import { Dropdown, MenuProps } from "antd";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { IoLanguage } from "..";
import { changeLanguage } from "../../redux/language/slice";
import { RootState } from "../../redux/store";

const StyledTitleLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`;

const StyledCustomDropdownContainer = styled.div`
	position: relative;
	top: 8px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	min-width: 6rem;
	padding: 0.3rem 0;
	background-color: ${(props) => props.theme.searchbarResultsBackground};
	backdrop-filter: blur(4px);
	box-shadow: 0px 0px 10px 3px
		${(props) => props.theme.searchbarResultsShadow};
	border-radius: 10px;
`;

const StyledCustomDropdownItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.headerIcons};
	width: 100%;
	padding: 0.3rem 0;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		color: ${(props) => props.theme.basic};
		transition: 0.3s;
	}
`;

export const LanguageDropdown: React.FC<any> = ({ color }) => {
	const router = useRouter();
	const reduxLanguageState = useSelector(
		(state: RootState) => state.language
	);
	const dispatch = useDispatch();

	const LanguageMenuItem: React.FC<any> = ({ pathname, languageObject }) => {
		const isOneField: boolean = isRoutePathOneFieldOnly(pathname);
		const dispatch = useDispatch();
		function onItemClick(event: any) {
			dispatch(changeLanguage(languageObject.code));
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

	const languageMenuItems: MenuProps["items"] =
		reduxLanguageState.languageList.map(
			(languageObject: any, i: any) => {
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
						<StyledCustomDropdownContainer>
							{items.map((item: any) => {
								const { languageObject } = item.label.props;
								const isOneField: boolean =
									isRoutePathOneFieldOnly(router.pathname);
								function onItemClick(event: any) {
									dispatch(
										changeLanguage(languageObject.locale)
									);
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
									<StyledCustomDropdownItem
										key={item.key}
										onClick={onItemClick}
									>
										{item.key}
									</StyledCustomDropdownItem>
								);
							})}
						</StyledCustomDropdownContainer>
					);
				}
			}}
		>
			<StyledTitleLink onClick={(e: any) => e.preventDefault()}>
				<IoLanguage size={"32px"} fill={color} />
			</StyledTitleLink>
		</Dropdown>
	);
};
