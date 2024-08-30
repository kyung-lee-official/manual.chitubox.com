"use client";

type MaskedImageProps = {
	src: string;
	width: number;
	height: number;
	/* width of highlighted area */
	vWidth: number;
	/* height of highlighted area */
	vHeight: number;
	/* x coordinate of the highlighted area */
	vX: number;
	/* y coordinate of the highlighted area */
	vY: number;
	/* corner radius of the highlighted area */
	rx: number;
};

export const MaskedImage = (props: MaskedImageProps) => {
	const { src, width, height, vWidth, vHeight, vX, vY, rx } = props;
	return (
		<div
			className="relative w-fit
			rounded-md overflow-hidden"
		>
			<img src={src} width={"100%"} alt="" className="brightness-150" />
			<div className="absolute top-0 right-0 bottom-0 left-0">
				<svg
					width={width}
					height={height}
					viewBox={`0 0 ${width} ${height}`}
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="svg_mask"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width={width}
						height={height}
					>
						<rect
							width={width}
							height={height}
							className="fill-white"
						/>
						<rect
							x={vX}
							y={vY}
							width={vWidth}
							height={vHeight}
							rx={rx}
							className="fill-black"
						/>
					</mask>
					<rect
						x={0}
						y={0}
						width={width}
						height={height}
						className="fill-black/50
						[mask-image:url(#svg_mask)]"
					/>
					<rect
						x={vX}
						y={vY}
						width={vWidth}
						height={vHeight}
						rx={rx}
						className="stroke-cyan-300 stroke-2"
					/>
				</svg>
			</div>
		</div>
	);
};
