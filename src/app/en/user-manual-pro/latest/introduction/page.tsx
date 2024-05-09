"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {

	const router = useRouter();
	useEffect(() => {
		const interval = setInterval(() => {
			router.push("/en-US/chitubox-pro/latest/introduction");
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [router]);
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