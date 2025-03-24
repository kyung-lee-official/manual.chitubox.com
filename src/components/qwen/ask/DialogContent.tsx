import { Dispatch, SetStateAction } from "react";
import { Chat } from "./Chat";

export const DialogContent = (props: {
	setShowDialog: Dispatch<SetStateAction<boolean>>;
}) => {
	const { setShowDialog } = props;

	return (
		<div className="flex flex-col p-4 gap-2">
			<Chat setShowDialog={setShowDialog} />
		</div>
	);
};
