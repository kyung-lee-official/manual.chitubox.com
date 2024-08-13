"use client";

import { Nav } from "@/components/icons/Icons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ReactNode } from "react";

type EntryType = {
	mainMenu?: string[];
	functionMenu?: ReactNode[];
	toolbar?: ReactNode[];
	machineTab?: ReactNode[];
	shortcut?: string[];
	componentList?: ReactNode[];
	supportSettingsPanel?: ReactNode[];
	manualSupportOptions?: ReactNode[];
	profileList?: ReactNode[];
};

const Td1 = (props: { children: ReactNode }) => {
	return (
		<td
			className="w-28 p-2
			font-bold
			whitespace-nowrap"
		>
			{props.children}
		</td>
	);
};

export const Entry = (props: EntryType) => {
	const {
		mainMenu,
		functionMenu,
		toolbar,
		machineTab,
		componentList,
		shortcut,
		supportSettingsPanel,
		manualSupportOptions,
		profileList
	} = props;

	const t = useTranslations("docComponents.entry");

	return (
		<div
			className="flex flex-col my-8
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
							<Td1>
								<Link href={t("mainMenu.link")}>
									{t("mainMenu.title")}
								</Link>
							</Td1>
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
					{functionMenu && (
						<tr>
							<Td1>
								<Link href={t("functionMenu.link")}>
									{t("functionMenu.title")}
								</Link>
							</Td1>
							<td className="p-2">
								<div className="flex items-center gap-3">
									{functionMenu.map((item, index) => {
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
							<Td1>
								<Link href={t("toolbar.link")}>
									{t("toolbar.title")}
								</Link>
							</Td1>
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
							<Td1>
								<Link href={t("machineTab.link")}>
									{t("machineTab.title")}
								</Link>
							</Td1>
							<td className="p-2">
								<div className="flex items-center gap-3">
									{machineTab.map((item, index) => {
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
					{componentList && (
						<tr>
							<Td1>
								<Link href={t("componentList.link")}>
									{t("componentList.title")}
								</Link>
							</Td1>
							<td className="p-2">
								<div className="flex items-center gap-3">
									{componentList.map((item, index) => {
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
					{supportSettingsPanel && (
						<tr>
							<Td1>
								<Link href={t("supportSettingsPanel.link")}>
									{t("supportSettingsPanel.title")}
								</Link>
							</Td1>
							<td className="p-2">
								<div className="flex items-center gap-3">
									{supportSettingsPanel.map((item, index) => {
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
					{manualSupportOptions && (
						<tr>
							<Td1>
								<Link href={t("manualSupportOptions.link")}>
									{t("manualSupportOptions.title")}
								</Link>
							</Td1>
							<td className="p-2">
								<div className="flex items-center gap-3">
									{manualSupportOptions.map((item, index) => {
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
					{profileList && (
						<tr>
							<Td1>
								<Link href={t("profileList.link")}>
									{t("profileList.title")}
								</Link>
							</Td1>
							<td className="p-2">
								<div className="flex items-center gap-3">
									{profileList.map((item, index) => {
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
					{shortcut && (
						<tr>
							<Td1>
								<Link href={t("shortcut.link")}>
									{t("shortcut.title")}
								</Link>
							</Td1>
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
