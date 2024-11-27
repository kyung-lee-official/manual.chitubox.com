import { useState } from "react";
import { usePageContext } from "@/utils/hooks";
import { useLocale } from "next-intl";
import docsContext from "@/preload/docsContext.json";
import { DocsContext } from "@/utils/types";
import { Block } from "./Block";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons/Icons";
import { usePathname } from "next/navigation";
import { DropdownProps } from "../Dropdown";

const Dropdown = (props: { dropdown: DropdownProps; isLastOne: boolean }) => {
	const locale = useLocale();
	const pathname = usePathname();

	const [show, setShow] = useState<boolean>(false);
	const { dropdown, isLastOne } = props;

	return (
		<>
			<div>
				<button
					className="flex justify-between items-center w-full py-2 gap-4"
					onClick={() => {
						setShow(!show);
					}}
				>
					<div className="flex items-center gap-2">
						{dropdown.title}
					</div>
					<div
						className={
							show ? "rotate-90 duration-200" : "duration-200"
						}
					>
						<ChevronRightIcon size={24} />
					</div>
				</button>
				{show && (
					<div
						className="flex flex-col
						border-t-[1px] border-solid border-neutral-200 dark:border-neutral-700"
					>
						{dropdown.menu.map((field, i) => {
							return (
								<Link
									key={i}
									href={field.homeUrl}
									className={`ml-6 py-2
									${
										pathname.startsWith(
											`/${locale}/${field.fieldId}`
										) && "text-blue-500 dark:text-sky-400"
									}	
									${
										i < dropdown.menu.length - 1 &&
										"border-b-[1px] border-solid border-neutral-200 dark:border-neutral-700"
									}`}
								>
									{field.fieldName}
								</Link>
							);
						})}
					</div>
				)}
			</div>
			{isLastOne && (
				<hr className="border-t-[1px] border-solid border-neutral-200 dark:border-neutral-700" />
			)}
		</>
	);
};

export const FieldTitles = (props: { productDocs: string; learn: string }) => {
	const { productDocs, learn } = props;
	const locale = useLocale();
	const pathname = usePathname();

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
			case "chitubox-basic":
				dropdowns[0].menu.push(field);
				break;
			case "chitubox-pro":
				dropdowns[0].menu.push(field);
				break;
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

	return (
		<Block>
			{dropdowns.map((dropdown, i) => {
				return (
					<Dropdown
						dropdown={dropdown}
						isLastOne={i < dropdowns.length - 1}
					/>
				);
			})}
		</Block>
	);
};
