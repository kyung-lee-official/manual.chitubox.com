import {
	Dispatch,
	ForwardedRef,
	forwardRef,
	MutableRefObject,
	SetStateAction,
	useRef,
} from "react";
import { Chat } from "./Chat";

export const DialogContent = forwardRef(function DialogContent(
	props: { setShowDialog: Dispatch<SetStateAction<boolean>> },
	ref: ForwardedRef<HTMLDialogElement | null>
) {
	const { setShowDialog } = props;
	const dialogRef = ref as MutableRefObject<HTMLDialogElement | null>;
	const dialogBgRef = useRef<HTMLDivElement | null>(null);

	return (
		<div
			ref={dialogBgRef}
			className="flex flex-col w-[600px] max-w-[800px] p-4 gap-2"
		>
			<Chat ref={dialogRef} setShowDialog={setShowDialog} />
		</div>
	);
});
