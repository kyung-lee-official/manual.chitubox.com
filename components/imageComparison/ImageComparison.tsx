import React from "react";

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
					<picture>
						<img src={img1Src} alt={text1} width={"100%"} />
					</picture>
				</div>
				<div className="flex-1">
					<picture>
						<img src={img2Src} alt={text2} width={"100%"} />
					</picture>
				</div>
			</div>
			<div className="flex gap-4">
				<div className="flex-1 p-4 text-center border-t-[1px] border-t-gray-500">
					{text1}
				</div>
				<div>{text2}</div>
			</div>
		</div>
	);
};
