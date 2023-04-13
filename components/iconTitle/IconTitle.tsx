import React from "react";
import styled from "styled-components";
import { Theme, useThemeStore } from "stores/theme";

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
	const { theme } = useThemeStore();

	return (
		<div
			style={{
				display: "flex",
				gap: "1rem",
				alignItems: "center",
				marginTop: "1rem",
			}}
		>
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
				{theme === Theme.DARK ? (
					<StyledH2Dark>{title}</StyledH2Dark>
				) : (
					<StyledH2Light>{title}</StyledH2Light>
				)}
			</div>
		</div>
	);
};
