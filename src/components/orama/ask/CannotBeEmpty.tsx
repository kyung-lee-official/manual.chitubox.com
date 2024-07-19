import { Dispatch, SetStateAction, useEffect } from "react";

const CannotBeEmpty = (props: {
	setShowCannotBeEmpty: Dispatch<SetStateAction<boolean>>;
}) => {
	const { setShowCannotBeEmpty } = props;

	useEffect(() => {
		const timerId = setTimeout(() => {
			setShowCannotBeEmpty(false);
		}, 2000);
		return () => {
			clearTimeout(timerId);
		};
	}, []);

	return (
		<div
			className="absolute top-[-50px] right-0
			flex flex-col items-center p-2
			text-sm text-nowrap
			bg-red-500
			rounded"
		>
			Cannot be empty!
			<div
				className="absolute bottom-[-8px] w-2 h-2
				rotate-180"
			>
				<svg
					viewBox="0 0 512 512"
					width={8}
					focusable="false"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					className="fill-red-500"
				>
					<path d="M 256 0 L 0 512 h 512 L 256 0 z" />
				</svg>
			</div>
		</div>
	);
};

export default CannotBeEmpty;
