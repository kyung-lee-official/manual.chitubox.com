import { Nav } from "@/components/icons/Icons";
import { useTranslations } from "next-intl";
import Link from "next/link";

type EntryType = {
	mainMenu?: string[];
	tabMenu?: string[];
	toolbar?: string[];
	machineTab?: string;
	mode?: "add" | "edit" | "delete";
};

export const Entry = (props: EntryType) => {
	const { mainMenu, tabMenu, toolbar, machineTab, mode } = props;

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
								<Link href={""}>{t("mainMenu")}</Link>
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
								<Link href={""}>{t("tabMenu")}</Link>
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
					{toolbar && (
						<tr>
							<td
								className="w-28 p-2
								font-bold
								whitespace-nowrap"
							>
								<Link href={""}>{t("toolbar")}</Link>
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
								<Link href={""}>{t("machineTab")}</Link>
							</td>
							<td className="p-2">{machineTab}</td>
						</tr>
					)}
					{mode && (
						<tr>
							<td
								className="w-28 p-2
								font-bold
								whitespace-nowrap"
							>
								<Link href={""}>{t("mode")}</Link>
							</td>
							<td className="p-2">{mode}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
