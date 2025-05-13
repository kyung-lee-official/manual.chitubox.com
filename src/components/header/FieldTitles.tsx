"use client";

import docsContext from "@/preload/docsContext.json";
import { MediaQuery } from "@/utils/types";
import { useMediaQuery } from "react-responsive";
import { usePageContext } from "@/utils/hooks";
import { DocsContext } from "@/utils/types";
import { useLocale } from "next-intl";
import { Dropdown, DropdownProps } from "./Dropdown";

const FieldTitles = (props: { productDocs: string; learn: string }) => {
	const { productDocs, learn } = props;
	const locale = useLocale();

	const is2xl = useMediaQuery({ query: MediaQuery["2xl"] });
	let activeField: string;
	const pageCtx = usePageContext();
	if (pageCtx) {
		activeField = pageCtx.fieldName;
	}
	const localeCtx = (docsContext as DocsContext).find((localeCtx) => {
		return localeCtx.locale === locale;
	});
	if (!localeCtx) return null;
	const fields = localeCtx.localizedFields.map((field) => {
		return {
			fieldId: field.fieldId,
			fieldName: field.fieldName,
			homeUrl: field.homeUrl,
			url: field.homeUrl,
		};
	});
	const dropdowns: DropdownProps[] = [
		{
			title: productDocs,
			menu: [],
		},
		{
			title: learn,
			menu: [],
		},
	];

	for (const field of fields) {
		switch (field.fieldId) {
			case "chitubox":
				dropdowns[0].menu.push(field);
				break;
			// case "chitubox-basic":
			// 	dropdowns[0].menu.push(field);
			// 	break;
			// case "chitubox-pro":
			// 	dropdowns[0].menu.push(field);
			// 	break;
			case "chitu-manager":
				dropdowns[0].menu.push(field);
				break;
			case "faq":
				dropdowns[0].menu.push(field);
				break;
			case "chitubox-printing-test":
				dropdowns[1].menu.push(field);
				break;
			case "academy":
				dropdowns[1].menu.push(field);
				break;
			case "cases":
				dropdowns[1].menu.push(field);
				break;
			default:
				break;
		}
	}

	if (is2xl) {
		return (
			<div
				className="flex items-center gap-10
				cursor-default"
			>
				{dropdowns.map((dropdown, i) => {
					return (
						<Dropdown
							key={i}
							title={dropdown.title}
							menu={dropdown.menu}
						/>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
};

export default FieldTitles;
