import axios from "axios";

export const qwenClient = {
	async chat(messages: { role: string; content: string }[]) {
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_QWEN_ENDPOINT}`,
				{
					model: "qwen-plus",
					messages /* input the complete conversation history */,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_QWEN_API_KEY}`,
					},
				}
			);
			return response.data.choices[0].message.content; 
		} catch (error) {
			console.error("Error calling Qwen API:", error);
			throw new Error("Failed to get response from Qwen API");
		}
	},
};
