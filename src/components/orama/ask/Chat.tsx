import {
	useState,
	useRef,
	useMemo,
	useEffect,
	forwardRef,
	ForwardedRef,
	Dispatch,
	SetStateAction,
	MutableRefObject,
} from "react";
import { oramaClient } from "../orama-client";
import { Bubble } from "./Bubble";
import { nanoid } from "nanoid";

export const Chat = forwardRef(function Chat(
	props: { setShowDialog: Dispatch<SetStateAction<boolean>> },
	ref: ForwardedRef<HTMLDialogElement | null>
) {
	const [conversation, setConversation] = useState<any[]>([
		{
			type: "a",
			bubbleId: nanoid(),
			state: "fulfilled",
			content: "Hello! How can I help you?",
		},
	]);
	const [question, setQuestion] = useState("");
	const conversationRef = useRef<HTMLDivElement>(null);
	const dialogRef = ref as MutableRefObject<HTMLDialogElement | null>;
	const { setShowDialog } = props;

	const cachedAnswerSession = useMemo(() => {
		return oramaClient.createAnswerSession({
			inferenceType: "documentation",
			initialMessages: [],
			events: {
				// onMessageChange: (messages) => console.log({ messages }),
				// onMessageLoading: (loading) => console.log({ loading }),
				// onAnswerAborted: (aborted) => console.log({ aborted }),
				// onSourceChange: (sources) => console.log({ sources }),
			},
		});
	}, []);

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
		try {
			const answer = await cachedAnswerSession.ask({
				term: cachedQuestion,
			});
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
							content: "An error occurred",
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
				bg-white/50
				rounded overflow-y-auto scrollbar"
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
					bg-white/50
					rounded outline-none resize-none
					scrollbar"
					onChange={(e) => {
						setQuestion(e.target.value);
					}}
					value={question}
					onKeyDown={(e) => {
						if (
							e.key === "Enter" &&
							!e.shiftKey &&
							question.trim()
						) {
							e.preventDefault();
							askQuestion(e);
						}
					}}
					placeholder="Enter to send"
				/>
				<div className="flex gap-4">
					<button
						className="px-2 py-1
						bg-white hover:bg-white/80
						rounded-md"
						onClick={() => {
							if (dialogRef.current) {
								dialogRef.current.close();
								setShowDialog(false);
							}
						}}
					>
						Close
					</button>
					<button
						type="submit"
						className="w-20 p-2
						text-white
						bg-blue-500 hover:bg-blue-500/80
						rounded"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
});
