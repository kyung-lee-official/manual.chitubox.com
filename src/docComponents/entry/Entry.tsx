"use client";

import { Nav } from "@/components/icons/Icons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ReactNode } from "react";

type EntryType = {
	mainMenu?: string[];
	tabMenu?: ReactNode[];
	toolbar?: ReactNode[];
	machineTab?: ReactNode;
	shortcut?: string[];
};

export const Entry = (props: EntryType) => {
	const { mainMenu, tabMenu, toolbar, machineTab, shortcut } = props;

	const t = useTranslations("docComponents.entry");

	return (
		<div
			className="flex flex-col
			rounded overflow-hidden"
		>
			<table>
				<thead>
					<tr>
						<th
							colSpan={2}
							className="p-2
							bg-neutral-200 dark:bg-neutral-600"
						>
							<div className="flex justify-start items-center gap-2">
								<Nav size={20} /> {t("title")}
							</div>
						</th>
					</tr>
				</thead>
				<tbody className="bg-neutral-200/50 dark:bg-neutral-600/50">
					{mainMenu && (
						<tr>
							<td
								className="w-28 p-2
								font-bold
								whitespace-nowrap"
							>
								<Link href={t("mainMenu.link")}>
									{t("mainMenu.title")}
								</Link>
							</td>
							<td className="p-2">
								<div className="flex items-center gap-3">
									{mainMenu.map((item, index) => {
										if (index === 0) {
											return (
												<div key={index}>{item}</div>
											);
										} else {
											return (
												<div className="flex items-center gap-3">
													<div>&gt;</div>
													<div key={index}>
														{item}
													</div>
												</div>
											);
										}
									})}
								</div>
							</td>
						</tr>
					)}
					{tabMenu && (
						<tr>
							<td
								className="w-28 p-2
								font-bold
								whitespace-nowrap"
							>
								<Link href={t("tabMenu.link")}>
									{t("tabMenu.title")}
								</Link>
							</td>
							<td className="p-2">
								<div className="flex items-center gap-3">
									{tabMenu.map((item, index) => {
										if (index === 0) {
											return (
												<div key={index}>{item}</div>
											);
										} else {
											return (
												<div className="flex items-center gap-3">
													<div>&gt;</div>
													<div
														key={index}
														className="whitespace-nowrap"
													>
														{item}
													</div>
												</div>
											);
										}
									})}
								</div>
							</td>
						</tr>
					)}
					{toolbar && (
						<tr>
							<td
								className="w-28 p-2
								font-bold
								whitespace-nowrap"
							>
								<Link href={t("toolbar.link")}>
									{t("toolbar.title")}
								</Link>
							</td>
							<td className="p-2">
								{toolbar.map((item, index) => {
									if (index === 0) {
										return <div key={index}>{item}</div>;
									} else {
										return (
											<div className="flex items-center gap-3">
												<div>⇒</div>
												<div key={index}>{item}</div>
											</div>
										);
									}
								})}
							</td>
						</tr>
					)}
					{machineTab && (
						<tr>
							<td
								className="w-28 p-2
								font-bold
								whitespace-nowrap"
							>
								<Link href={t("machineTab.link")}>
									{t("machineTab.title")}
								</Link>
							</td>
							<td className="p-2">{machineTab}</td>
						</tr>
					)}
					{shortcut && (
						<tr>
							<td
								className="w-28 p-2
								font-bold
								whitespace-nowrap"
							>
								<Link href={""}>{t("shortcut")}</Link>
							</td>
							<td className="p-2">
								<div className="flex items-center gap-3">
									{shortcut.map((item, index) => {
										if (index === 0) {
											return (
												<div key={index}>{item}</div>
											);
										} else {
											return (
												<div className="flex items-center gap-3">
													<div>+</div>
													<div key={index}>
														{item}
													</div>
												</div>
											);
										}
									})}
								</div>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
