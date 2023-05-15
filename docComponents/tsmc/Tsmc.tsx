import {
	animate,
	motion,
	useAnimate,
	useMotionTemplate,
	useMotionValue,
} from "framer-motion";
import React, { useRef, useState } from "react";

const CaretUpFill = ({ size, fill }: any) => {
	return (
		<svg
			viewBox="0 0 16 16"
			height="12"
			width="12"
			focusable="false"
			role="img"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"></path>
		</svg>
	);
};

const CaretDownFill = ({ size, fill }: any) => {
	return (
		<svg
			viewBox="0 0 16 16"
			height="12"
			width="12"
			focusable="false"
			role="img"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
		</svg>
	);
};

const Input = (props: any) => {
	const { className, value, setValue, ...rest } = props;
	const x = useMotionValue(0);
	const boxShadow = useMotionTemplate`0px 0px 8px rgba(0,255,0,${x})`;
	return (
		<motion.div
			className={`flex gap-[1px]`}
			style={{
				boxShadow: boxShadow,
			}}
		>
			<input
				type="number"
				step={"1"}
				value={value}
				{...rest}
				className={
					className
						? className
						: "text-center w-[80px] dark:bg-gray-700 rounded-sm outline-none custom-input"
				}
				onChange={(e) => setValue(e.target.value)}
				onFocus={() => {
					x.set(1);
					animate(x, 0, { duration: 0.5 });
				}}
				onBlur={(e) => setValue(parseFloat(e.target.value).toFixed(3))}
			/>
			<div
				className="flex flex-col justify-center items-end gap-[2px]
                pointer-events-none"
			>
				<div
					className="hover:text-gray-300 bg-gray-700
                    rounded-sm cursor-pointer pointer-events-auto"
					onClick={() => {
						setValue((parseFloat(value) + 1).toFixed(3));
					}}
				>
					<CaretUpFill />
				</div>
				<div
					className="hover:text-gray-300 bg-gray-700
                    rounded-sm cursor-pointer pointer-events-auto"
					onClick={() => {
						setValue((parseFloat(value) - 1).toFixed(3));
					}}
				>
					<CaretDownFill />
				</div>
			</div>
		</motion.div>
	);
};

const Add = () => <div className="flex justify-center">+</div>;
const Unit = ({ children }: any) => (
	<div className="flex justify-start pl-4">{children}</div>
);

const TsmcParams = () => {
	const [bld1, setBld1] = useState("3.000");
	const [bld2, setBld2] = useState("4.000");
	const [ld1, setLd1] = useState("3.000");
	const [ld2, setLd2] = useState("4.000");
	const [brd1, setBrd1] = useState("5.500");
	const [brd2, setBrd2] = useState("1.500");
	const [rd1, setRd1] = useState("5.500");
	const [rd2, setRd2] = useState("1.500");
	const [bls1, setBls1] = useState("65.000");
	const [bls2, setBls2] = useState("180.000");
	const [ls1, setLs1] = useState("65.000");
	const [ls2, setLs2] = useState("180.000");
	const [brs1, setBrs1] = useState("180.000");
	const [brs2, setBrs2] = useState("65.000");
	const [rs1, setRs1] = useState("180.000");
	const [rs2, setRs2] = useState("65.000");

	return (
		<div
			className="flex flex-col gap-4
            text-gray-400 font-semibold"
		>
			<table className="w-[700px] [&_>_tbody_>_tr_>_td:first-child]:h-8">
				<tbody>
					<tr>
						<td className="w-[300px]">Bottom Lift Distance</td>
						<td className="w-[96px]">
							<Input value={bld1} setValue={setBld1} />
						</td>
						<td className="w-[32px]">
							<Add />
						</td>
						<td className="w-[96px]">
							<Input value={bld2} setValue={setBld2} />
						</td>
						<td>
							<Unit>mm</Unit>
						</td>
					</tr>
					<tr>
						<td>Lifting Distance</td>
						<td>
							<Input value={ld1} setValue={setLd1} />
						</td>
						<td>
							<Add />
						</td>
						<td>
							<Input value={ld2} setValue={setLd2} />
						</td>
						<td>
							<Unit>mm</Unit>
						</td>
					</tr>
					<tr>
						<td>Bottom Retract Distance</td>
						<td>
							<Input value={brd1} setValue={setBrd1} />
						</td>
						<td>
							<Add />
						</td>
						<td>
							<Input value={brd2} setValue={setBrd2} />
						</td>
						<td>
							<Unit>mm</Unit>
						</td>
					</tr>
					<tr>
						<td>Retract Distance</td>
						<td>
							<Input value={rd1} setValue={setRd1} />
						</td>
						<td>
							<Add />
						</td>
						<td>
							<Input value={rd2} setValue={setRd2} />
						</td>
						<td>
							<Unit>mm</Unit>
						</td>
					</tr>
				</tbody>
			</table>
			<table className="w-[700px] [&_>_tbody_>_tr_>_td:first-child]:h-8">
				<tbody>
					<tr>
						<td className="w-[300px]">Bottom Lift Speed</td>
						<td className="w-[96px]">
							<Input value={bls1} setValue={setBls1} />
						</td>
						<td className="w-[32px]">
							<Add />
						</td>
						<td className="w-[96px]">
							<Input value={bls2} setValue={setBls2} />
						</td>

						<td>
							<Unit>mm/mim</Unit>
						</td>
					</tr>
					<tr>
						<td>Lifting Speed</td>
						<td>
							<Input value={ls1} setValue={setLs1} />
						</td>
						<td>
							<Add />
						</td>
						<td>
							<Input value={ls2} setValue={setLs2} />
						</td>
						<Unit>mm/mim</Unit>
					</tr>
					<tr>
						<td>Bottom Retract Speed</td>
						<td>
							<Input value={brs1} setValue={setBrs1} />
						</td>
						<td>
							<Add />
						</td>
						<td>
							<Input value={brs2} setValue={setBrs2} />
						</td>
						<Unit>mm/mim</Unit>
					</tr>
					<tr>
						<td>Retract Speed</td>
						<td>
							<Input value={rs1} setValue={setRs1} />
						</td>
						<td>
							<Add />
						</td>
						<td>
							<Input value={rs2} setValue={setRs2} />
						</td>
						<Unit>mm/mim</Unit>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

const Graph = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="281"
			height="403.12"
			viewBox="0 0 281 403.12"
		>
			{/* vat */}
			<polygon
				points="270.5 364.62 270.5 398.62 10.5 398.62 10.5 364.62 0.5 364.62 0.5 398.62 0.5 402.62 10.5 402.62 270.5 402.62 280.5 402.62 280.5 398.62 280.5 364.62 270.5 364.62"
				className="fill-gray-700"
			/>
			{/* plate */}
			<rect
				x="0.5"
				y="94.5"
				width="280"
				height="36"
				className="fill-gray-700"
			/>
			{/* holder */}
			<rect
				x="101.42"
				y="56.5"
				width="78.15"
				height="10"
				className="fill-gray-700"
			/>
			<rect
				x="101.42"
				y="56.5"
				width="10"
				height="38"
				className="fill-gray-700"
			/>
			<rect
				x="169.58"
				y="56.5"
				width="10"
				height="38"
				className="fill-gray-700"
			/>
			<rect
				x="71.42"
				y="84.5"
				width="40"
				height="10"
				className="fill-gray-700"
			/>
			<rect
				x="169.58"
				y="84.5"
				width="40"
				height="10"
				className="fill-gray-700"
			/>
			<rect
				x="122.5"
				y="20.5"
				width="36"
				height="36"
				className="fill-gray-700"
			/>
			<rect
				x="101.42"
				y="0.5"
				width="78.15"
				height="20"
				className="fill-gray-700"
			/>
			{/* layers */}
			<rect
				x="60.5"
				y="132.31"
				width="160"
				height="4"
				className="fill-sky-500"
			/>
			<rect
				x="60.5"
				y="138.11"
				width="160"
				height="4"
				className="fill-sky-500"
			/>
			<rect
				x="60.5"
				y="143.92"
				width="160"
				height="4"
				className="fill-sky-500"
			/>
			<rect
				x="65.5"
				y="149.72"
				width="150"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="70.5"
				y="155.53"
				width="140"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="75.5"
				y="161.34"
				width="130"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="167.14"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="172.95"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="178.75"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="184.56"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="190.37"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="196.17"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="201.98"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="207.79"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="213.59"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="219.4"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="225.2"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="231.01"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="236.82"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<rect
				x="80.5"
				y="242.62"
				width="120"
				height="4"
				className="fill-gray-500/20"
			/>
			<polygon
				points="42.53 319.25 20.5 348.15 32.53 348.15 32.53 398.15 52.53 398.15 52.53 348.15 64.56 348.15 42.53 319.25"
				className="fill-gray-700"
				onClick={() => {}}
			/>
			<polygon points="42.53 238.82 20.5 267.72 32.53 267.72 32.53 317.72 52.53 317.72 52.53 267.72 64.56 267.72 42.53 238.82" />
			<polygon points="238.47 317.72 260.5 288.82 248.47 288.82 248.47 238.82 228.47 238.82 228.47 288.82 216.44 288.82 238.47 317.72" />
			<polygon points="238.47 398.15 260.5 369.25 248.47 369.25 248.47 319.25 228.47 319.25 228.47 369.25 216.44 369.25 238.47 398.15" />
		</svg>
	);
};

export const Tsmc = () => {
	return (
		<div className="flex flex-col gap-6 my-8">
			<TsmcParams />
			<Graph />
		</div>
	);
};
