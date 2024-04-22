import { useRef, useState } from "react";
import { InstanceDialog } from "./InstanceDialog";
import { useDocsContext } from "@/utils/hooks";

export const Instance = () => {
	const { docInstanceContext, localizedContext } = useDocsContext();

	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const [showInstanceDialog, setShowInstanceDialog] =
		useState<boolean>(false);

	if (docInstanceContext) {
		return (
			<div
				className="flex justify-center items-center p-4
				text-xl
				border-b-[1px] border-neutral-200 dark:border-neutral-800"
			>
				<button
					className="flex justify-center items-center max-w-max py-2 px-4
					text-xl
					border-[1px] border-neutral-200 dark:border-neutral-800
					rounded-full select-none"
					onClick={() => {
						if (dialogRef.current) {
							dialogRef.current.showModal();
							setShowInstanceDialog(true);
						}
					}}
				>
					{docInstanceContext.docInstanceName}
				</button>
				<InstanceDialog
					ref={dialogRef}
					localizedContext={localizedContext}
					showDialog={showInstanceDialog}
					setShowDialog={setShowInstanceDialog}
				/>
			</div>
		);
	} else {
		return null;
	}
};
