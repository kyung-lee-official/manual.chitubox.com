export const ImageContainer = (props: any) => {
	const { src, alt, style } = props;
	return (
		<div
			className={`flex items-center w-fit max-w-full my-4
            drop-shadow rounded-md overflow-scroll`}
		>
			<img src={src} alt={alt ?? ""} style={style} />
		</div>
	);
};
