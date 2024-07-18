import { useRef, useState } from "react";
import { GoSearch } from "@/components/icons/Icons";
import { SearchDialog } from "./SearchDialog";

export const OramaSearch = () => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const [showDialog, setShowDialog] = useState<boolean>(false);
	return (
		<div>
			<button
				className="outline-none"
				onClick={() => {
					if (dialogRef.current) {
						dialogRef.current.showModal();
						setShowDialog(true);
					}
				}}
			>
				<GoSearch size={32} />
			</button>
			<SearchDialog
				ref={dialogRef}
				showDialog={showDialog}
				setShowDialog={setShowDialog}
			/>
		</div>
	);
};
