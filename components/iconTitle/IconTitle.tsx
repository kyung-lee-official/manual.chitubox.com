import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styled from "styled-components";

const StyledH2Light = styled.h2`
	color: black;
`;

const StyledH2Dark = styled.h2`
	color: ${(props) => props.theme.textContent};
`;

const StyledIconText = styled.p`
	color: white;
	font-size: 1.8rem;
`;

const StyledDiv = styled.div`
	width: 44px;
	height: 44px;
	border-radius: 50%;
	background-color: hsla(0, 0%, 20%, 1);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const IconTitle: React.FC<any> = ({ icon, title }) => {
	const reduxTheme = useSelector(
		(state: RootState) => state.theme.currentTheme
	);

	return (
		<div style={{
			display: "flex",
			gap: "1rem",
			alignItems: "center",
			marginTop: "1rem"
		}}>
			<StyledDiv>
				<StyledIconText>{icon}</StyledIconText>
			</StyledDiv>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{reduxTheme === "dark" ? (
					<StyledH2Dark>{title}</StyledH2Dark>
				) : (
					<StyledH2Light>{title}</StyledH2Light>
				)}
			</div>
		</div>
	);
};
