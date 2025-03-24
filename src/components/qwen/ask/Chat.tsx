import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { Bubble } from "./Bubble";
import { nanoid } from "nanoid";
import CannotBeEmpty from "./CannotBeEmpty";
import { qwenClient } from "../qwen-client";
import { useTranslations } from "next-intl";

export const Chat = (props: {
	setShowDialog: Dispatch<SetStateAction<boolean>>;
}) => {
	const t = useTranslations();

	const [conversation, setConversation] = useState<any[]>([
		{
			type: "a",
			bubbleId: nanoid(),
			state: "fulfilled",
			content: t("ai.startContent"),
		},
	]);
	const [messages, setMessages] = useState<any[]>([
		{
			role: "assistant",
			content: t("ai.startContent"),
		},
	]);
	/* for the entire conversation */
	const [question, setQuestion] = useState("");
	const conversationRef = useRef<HTMLDivElement>(null);
	const { setShowDialog } = props;
	const [showCannotBeEmpty, setShowCannotBeEmpty] = useState(false);

	useEffect(() => {
		const lastBubble = conversation[conversation.length - 1];
		if (lastBubble?.type === "a") {
			conversationRef.current?.scrollTo({
				top: conversationRef.current.scrollHeight,
				behavior: "smooth",
			});
		}
	}, [conversation]);

	const askQuestion = async (e: any) => {
		e.preventDefault();
		const cachedQuestion = question;
		if (!!!cachedQuestion) {
			setShowCannotBeEmpty(true);
			return;
		}
		setQuestion("");
		setConversation((conversation) => [
			...conversation,
			{
				type: "q",
				bubbleId: nanoid(),
				state: "fulfilled",
				content: cachedQuestion,
			},
		]);
		const bubbleId = nanoid();
		setConversation((conversation) => [
			...conversation,
			{
				type: "a",
				bubbleId,
				state: "pending",
				content: undefined,
			},
		]);

		/* update conversation history */
		const updatedMessages = [
			...messages,
			{ role: "user", content: cachedQuestion },
		];
		setMessages(updatedMessages);

		try {
			
			const answer = await qwenClient.chat(updatedMessages);

			
			setMessages((prevMessages) => [
				...prevMessages,
				{ role: "assistant", content: answer },
			]);

			/* update the state of the conversation */
			setConversation((conversation) => {
				return conversation.map((bubble) => {
					if (bubble.bubbleId === bubbleId) {
						return {
							...bubble,
							state: "fulfilled",
							content: answer,
						};
					}
					return bubble;
				});
			});
		} catch (error) {
			setConversation((conversation) => {
				return conversation.map((bubble) => {
					if (bubble.bubbleId === bubbleId) {
						return {
							...bubble,
							state: "error",
							content: t("ai.errorPrompt"),
						};
					}
					return bubble;
				});
			});
		}
	};

	return (
		<div className="flex-[0_1_50%] flex flex-col gap-2">
			<div
				ref={conversationRef}
				className="flex flex-col h-96 p-4 gap-6
				bg-white/50 dark:bg-neutral-900/50
				rounded overflow-y-auto scrollbar overscroll-contain"
			>
				{conversation.map((bubble, i) => {
					return (
						<Bubble
							key={i}
							type={bubble.type}
							state={bubble.state}
							content={bubble.content}
						/>
					);
				})}
			</div>
			<form
				className="flex flex-col items-end gap-4"
				onSubmit={askQuestion}
			>
				<textarea
					className="w-full h-32 p-4
					dark:text-neutral-300
					bg-white/50 dark:bg-neutral-900/50
					rounded outline-none resize-none
					scrollbar overscroll-contain"
					onChange={(e) => {
						setQuestion(e.target.value);
					}}
					value={question}
					onKeyDown={(e) => {
						if (e.key === "Enter" && !e.shiftKey) {
							if (!!question.trim()) {
								e.preventDefault();
								askQuestion(e);
							} else {
								e.preventDefault();
								setShowCannotBeEmpty(true);
							}
						}
					}}
					placeholder={t("ai.enterPrompt")}
				/>
				<div className="flex gap-4">
					<button
						className="w-20 px-2 py-1
						bg-white hover:bg-white/80
						dark:text-white
						dark:bg-white/40 dark:hover:bg-white/30
						rounded-md"
						onClick={() => setShowDialog(false)}
					>
						{t("ai.closeButton")}
					</button>
					<button
						type="submit"
						className="relative w-20 p-2
						text-white
						bg-blue-500 hover:bg-blue-500/80
						rounded"
					>
						{t("ai.sendButton")}
						{showCannotBeEmpty && (
							<CannotBeEmpty
								setShowCannotBeEmpty={setShowCannotBeEmpty}
							/>
						)}
					</button>
				</div>
			</form>
		</div>
	);
};
