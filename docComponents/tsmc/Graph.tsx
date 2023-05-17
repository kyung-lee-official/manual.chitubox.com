import { motion } from "framer-motion";
import { Stage } from "./Tsmc";

export const Graph = (props: any) => {
	const { stage } = props;

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
			{/* Bottom layers */}
			<motion.g
				initial={{
					fill: "rgba(107,114,128,0.2)",
				}}
				animate={{
					fill:
						stage === Stage.Bl1 ||
						stage === Stage.Bl2 ||
						stage === Stage.Br1 ||
						stage === Stage.Br2
							? "#0ea5e9"
							: "rgba(107,114,128,0.2)",
				}}
			>
				<rect x="60.5" y="132.31" width="160" height="4" />
				<rect x="60.5" y="138.11" width="160" height="4" />
				<rect x="60.5" y="143.92" width="160" height="4" />
			</motion.g>
			{/* Regular layers */}
			<motion.g
				initial={{
					fill: "rgba(107,114,128,0.2)",
				}}
				animate={{
					fill:
						stage === Stage.L1 ||
						stage === Stage.L2 ||
						stage === Stage.R1 ||
						stage === Stage.R2
							? "#0ea5e9"
							: "rgba(107,114,128,0.2)",
				}}
			>
				<rect x="65.5" y="149.72" width="150" height="4" />
				<rect x="70.5" y="155.53" width="140" height="4" />
				<rect x="75.5" y="161.34" width="130" height="4" />
				<rect x="80.5" y="167.14" width="120" height="4" />
				<rect x="80.5" y="172.95" width="120" height="4" />
				<rect x="80.5" y="178.75" width="120" height="4" />
				<rect x="80.5" y="184.56" width="120" height="4" />
				<rect x="80.5" y="190.37" width="120" height="4" />
				<rect x="80.5" y="196.17" width="120" height="4" />
				<rect x="80.5" y="201.98" width="120" height="4" />
				<rect x="80.5" y="207.79" width="120" height="4" />
				<rect x="80.5" y="213.59" width="120" height="4" />
				<rect x="80.5" y="219.4" width="120" height="4" />
				<rect x="80.5" y="225.2" width="120" height="4" />
				<rect x="80.5" y="231.01" width="120" height="4" />
				<rect x="80.5" y="236.82" width="120" height="4" />
				<rect x="80.5" y="242.62" width="120" height="4" />
			</motion.g>
			{/* Arrows */}
			<motion.polygon
				points="42.53 319.25 20.5 348.15 32.53 348.15 32.53 398.15 52.53 398.15 52.53 348.15 64.56 348.15 42.53 319.25"
				initial={{
					fill: "#374151",
				}}
				animate={{
					fill:
						stage === Stage.Bl1 || stage === Stage.L1
							? "#f59e0b"
							: "#374151",
				}}
			/>
			<motion.polygon
				points="42.53 238.82 20.5 267.72 32.53 267.72 32.53 317.72 52.53 317.72 52.53 267.72 64.56 267.72 42.53 238.82"
				initial={{
					fill: "#374151",
				}}
				animate={{
					fill:
						stage === Stage.Bl2 || stage === Stage.L2
							? "#10b981"
							: "#374151",
				}}
			/>
			<motion.polygon
				points="238.47 317.72 260.5 288.82 248.47 288.82 248.47 238.82 228.47 238.82 228.47 288.82 216.44 288.82 238.47 317.72"
				initial={{
					fill: "#374151",
				}}
				animate={{
					fill:
						stage === Stage.Br1 || stage === Stage.R1
							? "#10b981"
							: "#374151",
				}}
			/>
			<motion.polygon
				points="238.47 398.15 260.5 369.25 248.47 369.25 248.47 319.25 228.47 319.25 228.47 369.25 216.44 369.25 238.47 398.15"
				initial={{
					fill: "#374151",
				}}
				animate={{
					fill:
						stage === Stage.Br2 || stage === Stage.R2
							? "#f59e0b"
							: "#374151",
				}}
			/>
		</svg>
	);
};
