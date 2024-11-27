export const ImageContainer = (props: any) => {
	const { src, alt, figcaption, style } = props;
	return (
		<div
			className={`flex items-center w-fit max-w-full my-4
            drop-shadow rounded-md overflow-scroll`}
		>
			<img
				src={src}
				alt={alt ?? ""}
				style={style}
				className="rounded-md overflow-hidden"
			/>
			{figcaption && (
				<figcaption className="text-center text-sm text-gray-500">
					{figcaption}
				</figcaption>
			)}
		</div>
	);
};
