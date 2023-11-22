import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUrlLocale, useLanguageStore } from "stores/language";
import { Layout } from "@/components/layout/Layout";

function Loading() {
	const [count, setCount] = useState<number>(0);
	const [ellipsis, setEllipsis] = useState<string>("");
	useEffect(() => {
		const interval = setInterval(() => {
			setCount((count) => count + 1);
		}, 500);
		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
		const dots = count % 4;
		setEllipsis(".".repeat(dots));
	}, [count]);
	return (
		<div
			className="flex flex-col justify-center items-center min-h-[60vh]
            font-medium text-3xl
            text-gray-800 dark:text-gray-400
            bg-slate-50 dark:bg-slate-900"
		>
			Loading{ellipsis}
		</div>
	);
}

const IndexPage = () => {
	const router = useRouter();
	const { language } = useLanguageStore();
	let urlLocale = getUrlLocale(language);

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push(`/${urlLocale}`);
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [urlLocale, router]);

	return (
		<Layout>
			<Loading />
		</Layout>
	);
};

export default IndexPage;
