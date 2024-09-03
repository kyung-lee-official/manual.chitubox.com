import { useRef, useState } from "react";
import { GoSearch } from "@/components/icons/Icons";
import { SearchDialog } from "./SearchDialog";
import { useMediaQuery } from "react-responsive";
import { MediaQuery } from "@/utils/types";

const OramaSearch = () => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const [showDialog, setShowDialog] = useState<boolean>(false);
	const is2xl = useMediaQuery({ query: MediaQuery["2xl"] });

	if (is2xl) {
		return (
			<div>
				<button
					className="flex items-center outline-none"
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
	} else {
		return null;
	}
};

export default OramaSearch;
