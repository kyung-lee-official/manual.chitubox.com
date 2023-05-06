import React from "react";
import { Image } from "antd";

export const ImageComparison: React.FC<any> = ({
	img1Src,
	text1,
	img2Src,
	text2,
}) => {
	return (
		<div className="w-full max-w-[1000px]">
			<div className="flex gap-4">
				<div className="flex-1">
					<Image src={img1Src} className="m-auto rounded-lg" />
				</div>
				<div className="flex-1">
					<Image src={img2Src} className="m-auto rounded-lg" />
				</div>
			</div>
			<div className="flex gap-4 text-gray-500 dark:text-gray-400">
				<div className="flex-1 p-2 text-center border-t-[1px] border-t-gray-500">
					{text1}
				</div>
				<div className="flex-1 p-2 text-center border-t-[1px] border-t-gray-500">
					{text2}
				</div>
			</div>
		</div>
	);
};
