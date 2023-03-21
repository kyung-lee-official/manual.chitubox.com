import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getUrlLocale } from "../redux/language/slice";
import { useRouter } from "next/router";
import { Layout } from "../components";
import styled from "styled-components";

const StyledLoading = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
	font-weight: bold;
	color: ${(props) => props.theme.textSecondaryText};
	background-color: ${(props) => props.theme.background};
	min-height: 60vh;
	padding: 10rem;
`;

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
	return <StyledLoading>Loading{ellipsis}</StyledLoading>;
}

const IndexPage = () => {
	const router = useRouter();
	const reduxLanguageState = useSelector(
		(state: RootState) => state.language
	);
	let reduxUrlLocale = getUrlLocale(reduxLanguageState.currentLocale);

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push(`/${reduxUrlLocale}`);
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<Layout>
			<Loading />
		</Layout>
	);
};

export default IndexPage;
