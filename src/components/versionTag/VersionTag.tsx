"use client";

import { useTranslations } from "next-intl";
import { MediaQuery } from "@/utils/types";
import { useMediaQuery } from "react-responsive";
import { useRef, useState } from "react";
import { VersionDialog } from "./VersionDialog";
import { useDocsContext } from "@/utils/hooks";

const VersionTag = () => {
	const { docInstanceContext, versionedContext } = useDocsContext();

	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const [showVersionDialog, setShowVersionDialog] = useState<boolean>(false);

	const t = useTranslations();
	const isDesktopOrLaptop = useMediaQuery({ query: MediaQuery.lg });

	if (docInstanceContext) {
		if (isDesktopOrLaptop) {
			return (
				<div
					className="flex justify-center items-center max-w-max h-8 px-4 mb-8
					text-sm
					border-[1px] border-neutral-200 dark:border-neutral-800
					rounded-full select-none"
				>
					{t("docContent.version")}: {versionedContext.versionNumber}
				</div>
			);
		} else {
			return (
				<div>
					<button
						className="flex justify-center items-center max-w-max h-8 px-4 mb-8
						text-sm
						border-[1px] border-neutral-200 dark:border-neutral-800
						rounded-full select-none"
						onClick={() => {
							if (dialogRef.current) {
								dialogRef.current.showModal();
								setShowVersionDialog(true);
							}
						}}
					>
						{t("docContent.version")}:{" "}
						{versionedContext.versionNumber}
					</button>
					<VersionDialog
						ref={dialogRef}
						docInstanceContext={docInstanceContext}
						showDialog={showVersionDialog}
						setShowDialog={setShowVersionDialog}
					/>
				</div>
			);
		}
	} else {
		return null;
	}
};

export default VersionTag;
