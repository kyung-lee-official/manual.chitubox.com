import { useRouter } from "next/router";
import React, { useState } from "react";

export const IsPageUseful = (props: any) => {
	const { meta } = props;
	const router = useRouter();

	const [isClicked, setIsClicked] = useState(false);

	function click() {
		console.log(meta);
		setIsClicked(true);
	}

	return (
		<div
			className="fixed left-6 bottom-10 flex gap-4 px-4 py-2
            font-semibold text-base text-gray-800 dark:text-gray-200
            bg-gray-50/40 dark:bg-gray-600 backdrop-blur-sm
            shadow-md rounded-md"
		>
			{isClicked ? (
				<div className="font-medium">Thank you for your feedback!</div>
			) : (
				<>
					<div className="font-medium">Is this page useful?</div>
					<div className="cursor-pointer" onClick={click}>
						👍
					</div>
					<div className="cursor-pointer" onClick={click}>
						👎
					</div>
				</>
			)}
		</div>
	);
};
