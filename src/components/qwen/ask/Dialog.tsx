import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useRef,
} from "react";
import { DialogContent } from "./DialogContent";

export const Dialog = (props: {
	setShow: Dispatch<SetStateAction<boolean>>;
}) => {
	const { setShow } = props;
	const modalRef = useRef<HTMLDivElement | null>(null);

	const handleClick = useCallback((e: MouseEvent) => {
		if (modalRef.current) {
			if (!modalRef.current.contains(e.target as Node)) {
				quit();
			}
		}
	}, []);

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [handleClick]);

	function quit() {
		setShow(false);
	}

	return (
		<div
			className="flex justify-center items-center fixed top-0 right-0 bottom-0 left-0 px-4
			bg-black/50 backdrop-filter-[blur(2px)] 
			z-30"
		>
			<div
				ref={modalRef}
				className="w-full mx-auto my-4
				lg:w-[600px]
				xl:w-[800px]
				bg-gradient-to-br from-[#0094F7]/20 to-[#A961FF]/20 bg-white dark:bg-neutral-900
				rounded-lg"
			>
				<DialogContent setShowDialog={setShow} />
			</div>
		</div>
	);
};
