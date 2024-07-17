"use client";

import { useRef, useState } from "react";
import { Dialog } from "./Dialog";

const Ask = () => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const [showDialog, setShowDialog] = useState<boolean>(false);

	return (
		<div>
			{/* backdrop-blur cannot work with opacity in the same element */}
			<div className="fixed right-4 bottom-4 backdrop-blur">
				<button
					className="flex flex-col items-center p-2
					text-neutral-100
					bg-gradient-to-br from-[#0094F7] to-[#A961FF]
					hover:bg-[linear-gradient(-45deg,#E17200,#FF3338,#657BFF,#00A38F)]
					opacity-60 hover:opacity-90 dark:opacity-80 dark:hover:opacity-100
					transition-all duration-300
					rounded-lg shadow outline-none
					hover:animate-[bg-pos_10s_ease-in-out_infinite]
					hover:bg-[length:400px_100px]"
					onClick={() => {
						if (dialogRef.current) {
							dialogRef.current.showModal();
							setShowDialog(true);
						}
					}}
				>
					<svg
						width={40}
						height={40}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="20 20 260 260"
						className="drop-shadow-md"
					>
						<defs>
							<linearGradient
								id="linear-gradient-logo"
								x1="150"
								y1="33.56"
								x2="150"
								y2="287.8"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.22" stopColor="#fff" />
								<stop offset="0.47" stopColor="#ececec" />
								<stop offset="0.95" stopColor="#bfbfbf" />
							</linearGradient>
						</defs>
						<path
							d="M41,150c0,20.76,25.29,38.67,61.92,47.09C111.3,233.71,129.24,259,150,259s38.66-25.29,47.09-61.93C233.71,188.65,259,170.74,259,150s-25.29-38.67-61.91-47.09C188.66,66.26,170.72,41,150,41s-38.7,25.29-47.08,61.92C66.29,111.31,41,129.22,41,150Z"
							fill="url(#linear-gradient-logo)"
						/>
					</svg>
					Ask AI
				</button>
			</div>
			<Dialog
				ref={dialogRef}
				showDialog={showDialog}
				setShowDialog={setShowDialog}
			/>
		</div>
	);
};

export default Ask;
