import React from "react";

export const ImageContainer: React.FC<any> = (props: any) => {
	const { className, children } = props;
	return (
		<div
			className={`flex items-center my-4
            drop-shadow-lg ${className}`}
		>
			{children}
		</div>
	);
};
