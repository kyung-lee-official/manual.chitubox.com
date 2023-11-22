import React from "react";
import { LanguageDropdown } from "../languageDropdown/LanguageDropdown";

export const PageDrawerContent: React.FC<any> = () => {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex justify-evenly items-center">
				<div className="flex justify-center items-center cursor-pointer">
					<LanguageDropdown />
				</div>
			</div>
		</div>
	);
};
