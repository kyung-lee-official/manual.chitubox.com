import { useEffect, useState } from "react";

export const Banner = (props: any) => {
	const [bannerHeight, setBannerHeight] = useState(64);

	useEffect(() => {
		setBannerHeight(Math.random() * 200);
	}, []);

	return (
		<div
			className="top-0 bg-red-400"
			style={{ height: `${bannerHeight}px` }}
		>
			Banner
		</div>
	);
};
