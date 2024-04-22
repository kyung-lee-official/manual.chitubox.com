import { CloseIcon } from "@/components/icons/Icons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
	Dispatch,
	ForwardedRef,
	forwardRef,
	MutableRefObject,
	SetStateAction,
	useEffect,
	useRef,
} from "react";

const DialogContent = forwardRef(function DialogContent(
	props: {
		localizedContext: any;
		setShowDialog: Dispatch<SetStateAction<boolean>>;
	},
	ref: ForwardedRef<HTMLDialogElement | null>
) {
	const { localizedContext, setShowDialog } = props;
	const dialogRef = ref as MutableRefObject<HTMLDialogElement | null>;
	const dialogBgRef = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = (e: MouseEvent) => {
		if (
			!dialogBgRef.current?.contains(e.target as Node) &&
			dialogBgRef.current !== e.target
		) {
			if (dialogRef.current) {
				dialogRef.current.close();
				setShowDialog(false);
			}
		}
	};
	useEffect(() => {
		if (dialogRef.current) {
			dialogRef.current.addEventListener("click", handleClickOutside);
		}
		return () => {
			if (dialogRef.current) {
				dialogRef.current.removeEventListener(
					"click",
					handleClickOutside
				);
			}
		};
	}, []);

	const t = useTranslations();

	return (
		<div ref={dialogBgRef}>
			<div
				className="flex justify-between items-center py-1 px-4
				border-b-[1px] border-solid border-neutral-200 dark:border-neutral-700"
			>
				<div>{t("docContent.selectDocs")}</div>
				<div
					onClick={() => {
						if (dialogRef.current) {
							dialogRef.current.close();
							setShowDialog(false);
						}
					}}
				>
					<CloseIcon size={24} />
				</div>
			</div>
			<div className="h-56 p-4 overflow-y-auto">
				<div
					className="flex flex-col items-center px-3
					bg-neutral-100 dark:bg-neutral-700
					rounded-md"
				>
					{localizedContext.localizedDocInstances.map(
						(instance: any, i: number) => {
							if (
								i <
								localizedContext.localizedDocInstances.length -
									1
							) {
								return (
									<Link
										href={
											instance.versionedContexts[0]
												.pagesContext[0].path
										}
										key={i}
										className="w-full py-2
										border-b-[1px] border-solid border-neutral-200"
										onClick={() => {
											if (dialogRef.current) {
												dialogRef.current.close();
												setShowDialog(false);
											}
										}}
									>
										{instance.docInstanceName}
									</Link>
								);
							} else {
								return (
									<Link
										href={
											instance.versionedContexts[0]
												.pagesContext[0].path
										}
										key={i}
										className="w-full py-2"
										onClick={() => {
											if (dialogRef.current) {
												dialogRef.current.close();
												setShowDialog(false);
											}
										}}
									>
										{instance.docInstanceName}
									</Link>
								);
							}
						}
					)}
				</div>
			</div>
		</div>
	);
});

export const InstanceDialog = forwardRef(function InstanceDialog(
	props: {
		localizedContext: any;
		showDialog: boolean;
		setShowDialog: Dispatch<SetStateAction<boolean>>;
	},
	ref: ForwardedRef<HTMLDialogElement | null>
) {
	const { localizedContext, showDialog, setShowDialog } = props;
	const dialogRef = ref;

	return (
		<dialog
			ref={dialogRef}
			className="w-[calc(100vw-64px)]
			text-neutral-900 dark:text-neutral-200
			bg-white dark:bg-neutral-800
			rounded-md backdrop:bg-black/80 backdrop:[backdrop-filter:blur(2px)]"
		>
			{showDialog && (
				<DialogContent
					ref={dialogRef}
					localizedContext={localizedContext}
					setShowDialog={setShowDialog}
				/>
			)}
		</dialog>
	);
});
