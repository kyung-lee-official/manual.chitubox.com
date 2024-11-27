import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "../icons/Icons";

type Field = {
	fieldId: string;
	fieldName: string;
	homeUrl: string;
	url: string;
};

export type DropdownProps = {
	title: string;
	menu: Field[];
};

export const Dropdown = (props: DropdownProps) => {
	const { title, menu } = props;

	const [show, setShow] = useState(false);

	const locale = useLocale();
	const pathname = usePathname();

	const entryRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	const handleClick = useCallback((e: any) => {
		if (entryRef.current) {
			if (
				e.target === entryRef.current ||
				entryRef.current.contains(e.target)
			) {
				/* entry clicked */
				setShow((state) => {
					return !state;
				});
			} else {
				if (menuRef.current) {
					/* menu clicked */
					if (
						e.target === menuRef.current ||
						menuRef.current.contains(e.target)
					) {
						/* do nothing or hide menu, up to you */
						setShow(false);
					} else {
						/* outside clicked */
						setShow(false);
					}
				}
			}
		}
	}, []);

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<div
			className="relative w-fit
			text-sm"
		>
			<button
				ref={entryRef}
				className="flex items-center p-2 gap-1
				cursor-pointer"
			>
				{title}
				<div
					className={`w-5 h-5 ${
						show ? "rotate-[-90deg]" : "rotate-[90deg]"
					} duration-200`}
				>
					<ChevronRightIcon size={20} />
				</div>
			</button>
			{/* note that menu is not a child of entry */}
			{show && (
				<div
					ref={menuRef}
					className="absolute 
					flex flex-col top-16 p-2 gap-1
					bg-white dark:bg-black
					border-[1px] border-neutral-200 dark:border-neutral-800
					rounded-md"
				>
					{menu.map((field, i) => {
						return (
							<Link
								href={field.url}
								key={i}
								className={`px-2 py-1 whitespace-nowrap
								${
									pathname.startsWith(
										`/${locale}/${field.fieldId}`
									) && "text-blue-500 dark:text-sky-400"
								}
								hover:bg-neutral-100 dark:hover:bg-neutral-800
								rounded-md`}
							>
								{field.fieldName}
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
};
