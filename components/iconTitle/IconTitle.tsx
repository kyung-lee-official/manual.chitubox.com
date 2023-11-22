import React from "react";

export const IconTitle: React.FC<any> = ({ icon, title }) => {
	return (
		<div
			style={{
				display: "flex",
				gap: "1rem",
				alignItems: "center",
				marginTop: "1rem",
			}}
		>
			<div
				className="flex justify-center items-center w-[44px] h-[44px] 
                text-white text-2xl
                bg-[hsla(0,0%,20%,1)]
                rounded-full"
			>
				{icon}
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div className="font-bold">{title}</div>
			</div>
		</div>
	);
};
