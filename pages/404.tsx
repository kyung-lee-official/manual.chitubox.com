import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { Layout } from "@/components/layout/Layout";

const PageNotFound: React.FC<any> = () => {
	const { t } = useTranslation();
	const [countDown, setCountDown] = useState<number>(5);
	const router = useRouter();

	useEffect(() => {
		const interval = setInterval(() => {
			if (countDown > 0) {
				setCountDown(countDown - 1);
			} else {
				router.push("/");
			}
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [countDown, router]);

	return (
		<Layout>
			<div
				className="flex flex-col justify-center items-center h-[70vh]
                text-gray-600 dark:text-gray-400
                bg-gray-100 dark:bg-gray-800"
			>
				<h1 className="text-2xl">{t("error.pageNotFound")}</h1>
				<h2 className="text-xl">
					{t("error.message1")}
					{countDown}
					{t("error.message2")}
				</h2>
			</div>
		</Layout>
	);
};

export default PageNotFound;
