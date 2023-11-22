import React, { useContext } from "react";
import { DocContext } from "../docsLayout/DocContext";

export const VersionTag: React.FC<any> = (props) => {
	const { versionedContext } = useContext(DocContext);

	return (
		<div
			className="flex justify-center items-center max-w-max h-8 px-4 mb-8
            font-medium text-sm text-gray-800 dark:text-gray-200
            bg-gray-50 dark:bg-gray-600
            shadow-md rounded-full"
		>
			Version: {versionedContext.versionNumber}
		</div>
	);
};
