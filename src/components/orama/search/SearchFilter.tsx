export const SearchFilter = (props: {
	selectedTags: string[];
	setSelectedTags: (tags: string[]) => void;
}) => {
	const tags = ["CHITUBOX Basic", "CHITUBOX Pro", "ChituManager", "FAQ"];
	const { selectedTags, setSelectedTags } = props;

	return (
		<div
			className="flex flex-wrap
			py-4 px-0 2xl:px-4
			gap-4
			text-xs"
		>
			{tags.map((tag) => {
				return (
					<button
						key={tag}
						className={`px-2 py-0.5
						text-neutral-50 dark:text-neutral-600
						${
							selectedTags.includes(tag)
								? "bg-slate-700 dark:bg-slate-200/80"
								: `bg-neutral-300 hover:bg-neutral-300/70
								dark:bg-neutral-300/30 dark:hover:bg-neutral-300/40`
						}
						rounded duration-150`}
						onClick={() => {
							if (selectedTags.includes(tag)) {
								setSelectedTags(
									selectedTags.filter((t) => t !== tag)
								);
							} else {
								setSelectedTags([...selectedTags, tag]);
							}
						}}
					>
						{tag}
					</button>
				);
			})}
		</div>
	);
};
