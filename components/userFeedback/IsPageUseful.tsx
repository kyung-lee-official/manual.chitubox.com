import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

const StyledIsPageUseful = styled.div`
	position: fixed;
	left: 0.5rem;
	bottom: 40px;
	display: flex;
	gap: 1rem;
	color: ${(props) => props.theme.textPrimaryText};
	background-color: ${(props) => props.theme.background};
	padding: 0.7rem 0.9rem;
	font-size: 1.2rem;
	box-shadow: 0px 0px 10px 3px ${(props) => props.theme.headerShadow};
	border-radius: 10px;
`;

const StyledTextWrapper = styled.div`
	font-weight: 600;
`;

const StyledItem = styled.div`
	cursor: pointer;
`;

export const IsPageUseful = (props: any) => {
	const { meta } = props;
	const router = useRouter();

	const [isClicked, setIsClicked] = useState(false);

	function click() {
		console.log(meta);
		setIsClicked(true);
	}

	return (
		<StyledIsPageUseful>
			{isClicked ? (
				<StyledTextWrapper>
					Thank you for your feedback!
				</StyledTextWrapper>
			) : (
				<>
					<StyledTextWrapper>Is this page useful?</StyledTextWrapper>
					<StyledItem onClick={click}>👍</StyledItem>
					<StyledItem onClick={click}>👎</StyledItem>
				</>
			)}
		</StyledIsPageUseful>
	);
};
