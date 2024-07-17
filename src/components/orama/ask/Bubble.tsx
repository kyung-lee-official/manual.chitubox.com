import { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

type BubbleType = {
	type: "q" | "a";
	state: "fulfilled" | "pending" | "error";
	content?: string;
};

const Row = (props: { type: "q" | "a"; children: React.ReactNode }) => {
	return (
		<div className={`flex flex-col gap-2`}>
			<div
				className={`flex ${
					props.type === "q" ? "justify-end" : "justify-start"
				}`}
			>
				<div
					className={`max-w-96 p-2
					${
						props.type === "q"
							? `text-purple-950 bg-gradient-to-br from-[#0094F7]/30 to-[#911DFF]/40
								dark:text-purple-200 dark:bg-gradient-to-br dark:from-[#0094F7]/70 dark:to-[#911DFF]/60`
							: `text-cyan-950 bg-gradient-to-br from-[#0094F7]/30 bg-[#00A38F]/30
								dark:text-cyan-200 dark:bg-gradient-to-br dark:from-[#0094F7]/30 dark:to-[#00A38F]/30`
					}
					rounded overflow-x-auto`}
				>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export const Bubble = (props: BubbleType) => {
	const { type, state, content } = props;
	const [mdxContent, setMdxContent] = useState({ __html: "" });

	async function compile() {
		if (content) {
			const processor = unified();
			processor.use(remarkParse).use(remarkRehype).use(rehypeStringify);
			const trimmed = content.replace("[object Object]", "");
			const result = await processor.process(trimmed);
			const resultWithLinks = result
				.toString()
				.replace("<a", "<a class='text-blue-500'")
				.replace("<code", `<code class='w-80 p-1'`);
			setMdxContent({ __html: resultWithLinks });
		}
	}

	useEffect(() => {
		if (type === "a") {
			compile();
		}
	}, [content]);

	switch (type) {
		case "q":
			return <Row type="q">{content}</Row>;
			break;
		case "a":
			if (state === "pending") {
				return (
					<Row type="a">
						<div
							className="flex flex-col w-64 p-2 gap-4
							animate-pulse"
						>
							<div className="grid grid-cols-3 gap-4">
								<div className="h-2 bg-neutral-700/30 rounded"></div>
								<div className="h-2 bg-neutral-700/30 rounded col-span-2"></div>
							</div>
							<div className="grid grid-cols-3 gap-4">
								<div className="h-2 bg-neutral-700/30 rounded col-span-2"></div>
								<div className="h-2 bg-neutral-700/30 rounded col-span-1"></div>
							</div>
							<div className="h-2 bg-neutral-700/30 rounded"></div>
						</div>
					</Row>
				);
			}
			if (state === "error") {
				return <Row type="a">❗{content}❗</Row>;
			}
			if (state === "fulfilled") {
				return (
					<Row type="a">
						<div
							dangerouslySetInnerHTML={mdxContent}
							className="flex flex-col gap-2"
						/>
					</Row>
				);
			}
			break;
		default:
			break;
	}
};
