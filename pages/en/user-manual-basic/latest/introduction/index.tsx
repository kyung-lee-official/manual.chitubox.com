import { Layout } from "@/components/layout/Layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	font-weight: bold;
	color: ${(props) => props.theme.textSecondaryText};
	background-color: ${(props) => props.theme.background};
	height: 70vh;
`;

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
			<StyledDiv>Redirecting...</StyledDiv>
		</Layout>
	);
};

export default IndexPage;
