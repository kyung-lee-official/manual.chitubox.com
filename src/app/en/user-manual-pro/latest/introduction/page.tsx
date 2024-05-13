import { redirect } from "@/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Page() {
	unstable_setRequestLocale("en-US");

	redirect("/chitubox-pro/latest/introduction");

	return (
		<div
			className="flex justify-center items-center h-70vh
			text-2xl font-bold text-gray-500 dark:text-gray-400 
			bg-gray-100 dark:bg-gray-800"
		>
			Redirecting...
		</div>
	);
}
