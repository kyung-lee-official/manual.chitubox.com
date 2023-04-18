import React from "react";

type ImageContainerType = {
	justifyContent: "flex-start" | "center" | "flex-end";
	children: any;
};
export const ImageContainer: React.FC<ImageContainerType> = ({
	justifyContent,
	children,
}) => {
	let justify: "justify-start" | "justify-center" | "justify-end" =
		"justify-start";

	switch (justifyContent) {
		case "flex-start":
			justify = "justify-start";
			break;
		case "center":
			justify = "justify-center";
			break;
		case "flex-end":
			justify = "justify-end";
			break;
		default:
			justify = "justify-start";
			break;
	}

	return (
		<div
			className={`flex ${justify} items-center my-4
            drop-shadow-lg`}
		>
			{children}
		</div>
	);
};

ImageContainer.defaultProps = {
	justifyContent: "flex-start",
};
