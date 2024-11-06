import {
	Dispatch,
	ForwardedRef,
	forwardRef,
	MutableRefObject,
	SetStateAction,
	useEffect,
	useRef,
	useState,
	useTransition,
} from "react";
import { oramaClient } from "../orama-client";
import Link from "next/link";
import { SearchFilter } from "./SearchFilter";

export const DialogContent = forwardRef(function DialogContent(
	props: { setShowDialog: Dispatch<SetStateAction<boolean>> },
	ref: ForwardedRef<HTMLDialogElement | null>
) {
	const { setShowDialog } = props;
	const dialogRef = ref as MutableRefObject<HTMLDialogElement | null>;
	const dialogBgRef = useRef<HTMLDivElement | null>(null);

	const [isPending, startTransition] = useTransition();
	const [term, setTerm] = useState<string>("");
	const [results, setResults] = useState<any>();

	function searchTerms(term: string) {
		startTransition(() => {
			setTerm(term);
		});
	}

	const [selectedTags, setSelectedTags] = useState([
		"CHITUBOX Basic",
		"CHITUBOX Pro",
		"ChituManager",
		"FAQ",
	]);

	useEffect(() => {
		oramaClient
			.search({
				term: term,
			})
			.then((response: any) => {
				setResults(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [term]);

	return (
		<div ref={dialogBgRef} className="flex flex-col">
			<div className="flex items-center p-4 gap-2">
				<svg width="20" height="20" viewBox="0 0 20 20">
					<path
						d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
						stroke="currentColor"
						fill="none"
						fillRule="evenodd"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>
				<input
					type="text"
					className="w-full
					bg-white/0
					outline-none"
					autoFocus
					placeholder="Search Documentation"
					onChange={(e) => {
						searchTerms(e.target.value);
					}}
				/>
				<button
					className="p-1
					text-neutral-50 text-xs
					bg-neutral-300 dark:bg-neutral-300/30
					rounded"
					onClick={() => {
						dialogRef.current?.close();
						setShowDialog(false);
					}}
				>
					{/* Esc won't work if Chrome Vimium extension is enabled */}
					ESC
				</button>
			</div>
			{term && (
				<div className="flex flex-col">
					<SearchFilter
						selectedTags={selectedTags}
						setSelectedTags={setSelectedTags}
					/>
					<div
						className="flex flex-col max-h-[400px] p-4 gap-2
						border-t-[1px] border-neutral-300 dark:border-neutral-500
						overflow-y-auto scrollbar overscroll-contain"
					>
						{results?.hits
							.filter((hit: any) => {
								return selectedTags.includes(hit.document.name);
							})
							?.map((hit: any) => {
								return (
									<Link
										key={hit.id}
										href={hit.document.path}
										className="flex items-center w-full p-2 gap-4
										text-neutral-500 dark:text-neutral-400
										bg-neutral-100 hover:bg-neutral-200/60
										dark:bg-neutral-800 dark:hover:bg-neutral-800/60
										rounded"
									>
										<div
											className="flex-[0_0_32px] flex justify-center items-center h-8 p-1
											text-lg font-bold
											bg-neutral-200 dark:bg-neutral-200/20
											rounded"
										>
											#
										</div>
										<div className="flex-1 flex flex-col min-w-0">
											<h2
												className="font-bold
												overflow-hidden whitespace-nowrap text-ellipsis"
											>
												{hit.document.title}
											</h2>
											<p
												className="text-neutral-400 dark:text-neutral-500
												overflow-hidden whitespace-nowrap text-ellipsis"
											>
												{hit.document.content}
											</p>
										</div>
									</Link>
								);
							})}
					</div>
				</div>
			)}
		</div>
	);
});
