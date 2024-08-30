import {
	Dispatch,
	ForwardedRef,
	forwardRef,
	MutableRefObject,
	SetStateAction,
	useEffect,
	useRef,
} from "react";
import { DialogContent } from "./DialogContent";

export const Dialog = forwardRef(function Dialog(
	props: {
		showDialog: boolean;
		setShowDialog: Dispatch<SetStateAction<boolean>>;
	},
	ref: ForwardedRef<HTMLDialogElement | null>
) {
	const { showDialog, setShowDialog } = props;
	const dialogRef = ref as MutableRefObject<HTMLDialogElement | null>;
	const contentRef = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = (e: MouseEvent) => {
		if (contentRef.current) {
			if (
				!contentRef.current.contains(e.target as Node) &&
				contentRef.current !== e.target
			) {
				dialogRef.current?.close();
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

	return (
		<dialog
			ref={dialogRef}
			className="w-full
			lg:w-[600px]
			xl:w-[800px]
			bg-gradient-to-br from-[#0094F7]/20 to-[#A961FF]/20
			dark:bg-neutral-900
			rounded-lg backdrop:bg-black/50
			backdrop:[backdrop-filter:blur(2px)]"
		>
			{showDialog && (
				<div ref={contentRef}>
					<DialogContent
						ref={dialogRef}
						setShowDialog={setShowDialog}
					/>
				</div>
			)}
		</dialog>
	);
});
