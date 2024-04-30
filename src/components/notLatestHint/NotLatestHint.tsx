"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from 'next/navigation';

export const NotLatestHint = () => {
	const t = useTranslations();
	const router = useRouter();
	const pathname = usePathname();

	return (
		<div>
			{pathname.split("/")[3] !== "latest" &&
				<div
					className="w-full py-2 px-4 mb-8 
					text-yellow-600 dark:text-yellow-500 text-lg font-bold
    			 bg-yellow-300/30 border-[1px] border-yellow-500 rounded-md"
				>
					{t("docContent.notLatest")}
				</div>
			}
		</div>
	);
};
