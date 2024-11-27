"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";

const ImageIcon = ({ size, fill }: any) => {
	return (
		<svg
			viewBox="0 0 512 512"
			height={size}
			width={size}
			focusable="false"
			role="img"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="currentColor"
				d="M447.1 32h-384C28.64 32-.01 60.65-.01 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96c.01-35.35-27.79-64-63.99-64zm-336 64c26.51 0 48 21.49 48 48s-20.6 48-48 48-48-21.49-48-48 22.38-48 48-48zm335 311.6c-2.8 5.2-8.2 8.4-14.1 8.4H82.01a15.993 15.993 0 0 1-14.26-8.75 16 16 0 0 1 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51 93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192c3.29 4.875 3.59 11.175.79 16.475z"
			></path>
		</svg>
	);
};

const Thumbnail = (props: any) => {
	const { ogImage } = props;

	const targetAspectRatio = useMemo(() => 16 / 9, []);

	const containerRef = useRef<HTMLDivElement | null>(null);
	const imgRef = useRef<HTMLImageElement | null>(null);

	const [imageSrc, setImageSrc] = useState<string | null>(null);

	function resize() {
		/* Set container size */
		if (containerRef.current) {
			containerRef.current.style.height = `${
				containerRef.current.clientWidth / targetAspectRatio
			}px`;
		}
	}

	const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		/* Set img size */
		if (containerRef.current && imgRef.current) {
			const imgAspectRatio =
				imgRef.current.naturalWidth / imgRef.current.naturalHeight;

			if (imgAspectRatio > targetAspectRatio) {
				const scale =
					containerRef.current.clientHeight /
					imgRef.current.clientHeight;
				imgRef.current.style.scale = scale.toFixed(6);
				imgRef.current.style.transform = `translateY(${
					(containerRef.current.clientHeight -
						imgRef.current.clientHeight) /
					2 /
					scale
				}px)`;
			} else {
				imgRef.current.style.transform = `translateY(${
					-(
						imgRef.current.clientHeight -
						containerRef.current.clientHeight
					) / 2
				}px)`;
			}
		}
	};

	const fetchImage = useCallback(async () => {
		if (ogImage) {
			try {
				const res = await axios.get(ogImage, {
					responseType: "arraybuffer",
				});
				const imageUrl =
					`data:${res.headers["content-type"]};base64,` +
					Buffer.from(res.data, "binary").toString("base64");
				setImageSrc(imageUrl);
			} catch (error) {}
		}
	}, []);

	useEffect(() => {
		resize();
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	useEffect(() => {
		fetchImage();
	}, []);

	return (
		<div ref={containerRef} className="overflow-hidden rounded">
			{imageSrc ? (
				<img ref={imgRef} src={imageSrc} alt="" onLoad={onImageLoad} />
			) : (
				<div
					className="flex justify-center items-center w-full h-full
					bg-gray-200/60"
				>
					<div
						className="flex justify-center items-center w-full h-full
						text-gray-300 animate-pulse"
					>
						<ImageIcon size={100} />
					</div>
				</div>
			)}
		</div>
	);
};

const DocsCard = (props: any) => {
	const { url, title, description, ogImage } = props;
	return (
		<a
			className="flex flex-col w-full min-w-[340px] h-64 p-2 gap-4
			bg-neutral-100 dark:bg-white/20
			overflow-hidden rounded-xl hover:shadow transition-all duration-200 cursor-pointer"
			href={url}
			title={title}
		>
			<Thumbnail ogImage={ogImage} />
			<div
				className="px-1
				font-semibold text-neutral-500 dark:text-neutral-50
				overflow-hidden whitespace-nowrap text-ellipsis"
			>
				{title}
			</div>
			{/* <div
				className="[display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] 
				px-1
				text-sm text-gray-300
				overflow-hidden"
			>
				{description}
			</div> */}
		</a>
	);
};

export default DocsCard;
