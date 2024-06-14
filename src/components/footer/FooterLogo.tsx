const FooterLogo = ({ size, fill }: any) => {
	return (
		<div className="flex items-center w-8 h-8 gap-4">
			<svg
				viewBox="0 0 300 300"
				width={32}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				version="1.1"
			>
				<rect
					className="fill-neutral-700 dark:fill-white"
					x="12.5"
					y="12.5"
					width="275"
					height="275"
					rx="60"
				/>
				<path
					className="fill-white dark:fill-black"
					d="M41,150c0,20.76,25.29,38.67,61.92,47.09C111.3,233.71,129.24,259,150,259s38.66-25.29,47.09-61.93C233.71,188.65,259,170.74,259,150s-25.29-38.67-61.91-47.09C188.66,66.26,170.72,41,150,41s-38.7,25.29-47.08,61.92C66.29,111.31,41,129.22,41,150Z"
				/>
			</svg>
		</div>
	);
};

export default FooterLogo;
