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

	if (!isVersioned) {
		return null;
	} else {
		return (
			<div>
				{pathname.split("/")[3] !== "latest" &&
					pathname.split("/")[4] !== "latest" && (
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
