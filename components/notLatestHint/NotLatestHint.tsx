import React from "react";
import { useTranslation } from "react-i18next";

export const NotLatestHint = () => {
	const { t } = useTranslation();

	return (
		<div
			className="w-full py-2 px-4 mb-8
            text-yellow-600 dark:text-yellow-500 text-lg font-bold
            bg-yellow-300/30 border-[1px] border-yellow-500 rounded-md"
		>
			{t("docContent.notLatest")}
		</div>
	);
};
