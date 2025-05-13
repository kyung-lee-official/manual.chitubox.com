"use client";

import { usePageContext } from "@/utils/hooks";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export const NotLatestHint = () => {
	const t = useTranslations();
	const pathname = usePathname();

	const pageCtx = usePageContext();
	if (!pageCtx) return null;
	const { isVersioned } = pageCtx;

	const outdatedPathPrefixes = [
		"/en-US/chitubox-basic",
		"/zh-CN/chitubox-basic",
		"/en-US/chitubox-pro",
		"/zh-CN/chitubox-pro",
	];

	if (!isVersioned) {
		return null;
	} else {
		return (
			<div>
				{outdatedPathPrefixes.some((prefix) =>
					pathname.startsWith(prefix)
				) && (
					<div
						className="w-full py-2 px-4 mb-8 
						text-yellow-600 dark:text-yellow-500 text-lg font-bold
						bg-yellow-300/30 border-[1px] border-yellow-500 rounded-md"
					>
						{t("docContent.notLatest")}
					</div>
				)}
			</div>
		);
	}
};
