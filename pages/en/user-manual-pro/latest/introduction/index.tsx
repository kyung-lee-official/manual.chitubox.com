import { Layout } from "@/components/layout/Layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

/**
 * Lagacy URL redirection
 */
const IndexPage = () => {
	const router = useRouter();
	useEffect(() => {
		const interval = setInterval(() => {
			router.push("/en-US/docs/chitubox-pro/latest/introduction");
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [router]);
	return (
		<Layout>
			<div
				className="flex justify-center items-center h-70vh
                text-2xl font-bold text-gray-500 dark:text-gray-400 
                bg-gray-100 dark:bg-gray-800"
			>
				Redirecting...
			</div>
		</Layout>
	);
};

export default IndexPage;
