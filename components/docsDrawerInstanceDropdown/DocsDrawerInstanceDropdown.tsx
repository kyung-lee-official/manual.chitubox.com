import { Dropdown } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { DocContext } from "../docsLayout/DocContext";

export const DocsDrawerInstanceDropdown: React.FC<any> = () => {
	const router = useRouter();
	const {
		localizedContext,
		docInstanceContext: { docInstanceName },
	} = useContext(DocContext);

	const instanceMenu = localizedContext.localizedDocInstances.map(
		(item: any) => {
			return {
				key: item.docInstance,
				label: (
					<Link href={item.versionedContexts[0].pagesContext[0].path}>
						{item.docInstanceName}
					</Link>
				),
			};
		}
	);

	return (
		<Dropdown
			menu={{ items: instanceMenu }}
			placement={"bottom"}
			dropdownRender={(menus: any) => {
				if (menus) {
					const { items } = menus.props;
					return (
						<div
							className="relative top-8 flex flex-col items-start w-full py-2
                            font-medium text-lg text-gray-900 dark:text-gray-100
                            bg-white/50 dark:bg-gray-800/50 backdrop-blur-[4px] shadow-md rounded-md"
						>
							{items.map((item: any) => {
								const { children, href } = item.label.props;
								return (
									<div
										className="flex justify-start items-center w-full px-4 py-2 cursor-pointer"
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
			<div
				className="flex justify-center items-center py-2
                font-medium text-lg text-gray-900 dark:text-gray-100
                bg-white/30 dark:bg-gray-800/50 shadow-md rounded-md"
			>
				{
					localizedContext.localizedDocInstances.find(
						(instance: any, i: number) => {
							return instance.docInstanceName === docInstanceName;
						}
					).docInstanceName
				}
			</div>
		</Dropdown>
	);
};
