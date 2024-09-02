"use client";

import { useState } from "react";
import { CloseOutlineIcon, MenuIcon } from "../../icons/Icons";
import { useMediaQuery } from "react-responsive";
import { MediaQuery } from "@/utils/types";
import MobileMenuModal from "./MobileMenuModal";

export const MobileMenuEntry = (props: { docs: string }) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const { docs } = props;

	const is2xl = useMediaQuery({ query: MediaQuery["2xl"] });

	if (is2xl) {
		return null;
	} else {
		return (
			<div className="flex justify-center items-center">
				<button
					onClick={() => {
						setShowMenu(!showMenu);
					}}
				>
					{showMenu ? (
						<CloseOutlineIcon size={36} />
					) : (
						<MenuIcon size={36} />
					)}
				</button>
				<MobileMenuModal
					docs={docs}
					showMenu={showMenu}
					setShowMenu={setShowMenu}
				/>
			</div>
		);
	}
};

export default MobileMenuEntry;
