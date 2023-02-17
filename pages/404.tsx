import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: ${(props) => props.theme.textSecondaryText};
	background-color: ${(props) => props.theme.background};
	height: 70vh;
	padding: 10rem;
`;

const StyledH1 = styled.h1`
	font-size: 3rem;
`;

const StyledH2 = styled.h2`
	font-size: 1.5rem;
`;

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
			<StyledContent>
				<StyledH1>{t("error.pageNotFound")}</StyledH1>
				<StyledH2>
					{t("error.message1")}
					{countDown}
					{t("error.message2")}
				</StyledH2>
			</StyledContent>
		</Layout>
	);
};

export default PageNotFound;
