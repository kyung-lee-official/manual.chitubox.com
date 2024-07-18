export const SearchFilter = (props: {
	selectedTag: string[];
	setSelectedTag: (tags: string[]) => void;
}) => {
	const tags = ["CHITUBOX Basic", "CHITUBOX Pro", "ChituManager", "FAQ"];
	const { selectedTag, setSelectedTag } = props;

	return (
		<div
			className="flex flex-wrap p-4 gap-4
			text-xs
			border-t-[1px] border-neutral-300 dark:border-neutral-500"
		>
			{tags.map((tag) => {
				return (
					<button
						key={tag}
						className={`px-2 py-0.5
						text-neutral-50 dark:text-neutral-600
						${
							selectedTag.includes(tag)
								? "bg-slate-700 dark:bg-slate-300/70"
								: `bg-neutral-300 hover:bg-neutral-300/70
									dark:bg-neutral-300/30 dark:hover:bg-neutral-300/40`
						}
						rounded duration-150`}
						onClick={() => {
							if (selectedTag.includes(tag)) {
								setSelectedTag(
									selectedTag.filter((t) => t !== tag)
								);
							} else {
								setSelectedTag([...selectedTag, tag]);
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
