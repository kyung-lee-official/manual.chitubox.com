import Link from "next/link";
import {
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
	useTransition,
} from "react";
import { SearchFilter } from "./SearchFilter";
import { oramaClient } from "../orama-client";
import { Block } from "@/components/header/mobileMenu/Block";
import { useOramaPage } from "../orama-route";

function OramaMobileSearchResult(props: {
	setShowMenu: Dispatch<SetStateAction<boolean>>;
}) {
	const { setShowMenu } = props;
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

	const isOramaPage = useOramaPage();

	if (isOramaPage) {
		return (
			<div className="flex flex-col gap-4">
				<form
					onSubmit={(e) => {
						/* Prevent form submissions when enter is pressed inside input */
						e.preventDefault();
					}}
				>
					<input
						className={`w-full h-8 px-3
						text-neutral-600 dark:text-neutral-300
						bg-neutral-100 dark:bg-neutral-800
						rounded-md outline-none
						transition-all`}
						type="search"
						name="search"
						id="search"
						placeholder={"Search"}
						onChange={(e) => {
							searchTerms(e.target.value);
						}}
						autoComplete="off"
					/>
					{term && (
						<div className="flex flex-col">
							<SearchFilter
								selectedTags={selectedTags}
								setSelectedTags={setSelectedTags}
							/>
							<Block>
								{results?.hits
									.filter((hit: any) => {
										return selectedTags.includes(
											hit.document.name
										);
									})
									?.map((hit: any, i: number) => {
										if (i < hit.length - 1) {
											return (
												<Link
													key={hit.id}
													href={hit.document.path}
													className="flex items-center w-full py-2 gap-4
													text-neutral-500 dark:text-neutral-400"
												>
													<div className="flex items-center w-full gap-2">
														<h2 className="text-nowrap">
															{hit.document.title}
														</h2>
														|
														<p
															className="text-neutral-400 dark:text-neutral-500
															overflow-hidden whitespace-nowrap text-ellipsis"
														>
															{
																hit.document
																	.content
															}
														</p>
													</div>
													<hr className="dark:border-neutral-700" />
												</Link>
											);
										} else {
											return (
												<Link
													key={hit.id}
													href={hit.document.path}
													className="flex items-center w-full py-2 gap-4
													text-neutral-500 dark:text-neutral-400"
												>
													<div className="flex items-center w-full gap-2">
														<h2 className="text-nowrap">
															{hit.document.title}
														</h2>
														|
														<p
															className="text-neutral-400 dark:text-neutral-500
															overflow-hidden whitespace-nowrap text-ellipsis"
														>
															{
																hit.document
																	.content
															}
														</p>
													</div>
												</Link>
											);
										}
									})}
							</Block>
						</div>
					)}
				</form>
			</div>
		);
	} else {
		return null;
	}
}

export default OramaMobileSearchResult;
