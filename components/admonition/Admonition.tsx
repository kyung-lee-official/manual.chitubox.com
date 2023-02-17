import React from "react";
import styled from "styled-components";
import { Dangerous, InfoCircle, Lightbulb, Warning } from "..";

interface StyledAdmonitionProps {
	type?: "note" | "tip" | "warning" | "danger";
}
const StyledAdmonitionContainer = styled.div<StyledAdmonitionProps>`
	padding: 1rem 1rem 1rem 1rem;
	margin: 1rem 0rem 1rem 0rem;
	color: ${(props) => {
		switch (props.type) {
			case "note":
				return props.theme.admonitionNoteColor;
			case "tip":
				return props.theme.admonitionTipColor;
			case "warning":
				return props.theme.admonitionWarningColor;
			case "danger":
				return props.theme.admonitionDangerColor;
			default:
				break;
		}
	}};
	background-color: ${(props) => {
		switch (props.type) {
			case "note":
				return props.theme.admonitionNoteBackground;
			case "tip":
				return props.theme.admonitionTipBackground;
			case "warning":
				return props.theme.admonitionWarningBackground;
			case "danger":
				return props.theme.admonitionDangerBackground;
			default:
				break;
		}
	}};
	border-left: 5px solid
		${(props) => {
			switch (props.type) {
				case "note":
					return props.theme.admonitionNoteBorder;
				case "tip":
					return props.theme.admonitionTipBorder;
				case "warning":
					return props.theme.admonitionWarningBorder;
				case "danger":
					return props.theme.admonitionDangerBorder;
				default:
					break;
			}
		}};
	border-radius: 8px;
`;

const StyledTitle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.8rem;
	font-weight: bold;
	font-size: 1.15rem;
`;

const Icon: React.FC<any> = ({ type }) => {
	switch (type) {
		case "note":
			return <InfoCircle size={"30px"} />;
		case "tip":
			return <Lightbulb size={"30px"} />;
		case "warning":
			return <Warning size={"30px"} />;
		case "danger":
			return <Dangerous size={"30px"} />;
		default:
			return null;
			break;
	}
};

const StyledContent = styled.div`
	margin-top: 1rem;
	font-size: 1.03rem;
`;

interface Admonition {
	children: any;
	type?: "note" | "tip" | "warning" | "danger";
	title?: string;
}
export const Admonition: React.FC<any> = ({
	type,
	title,
	children,
}: Admonition) => {
	if (!type) {
		type = "note";
		if (!title) {
			title = "NOTE";
		}
	} else {
		if (!title) {
			switch (type) {
				case "note":
					title = "NOTE";
					break;
				case "tip":
					title = "TIP";
					break;
				case "warning":
					title = "WARNING";
					break;
				case "danger":
					title = "DANGER";
					break;
				default:
					title = "";
					break;
			}
		}
	}
	title = title.toUpperCase();
	return (
		<StyledAdmonitionContainer type={type}>
			<StyledTitle>
				<Icon type={type} />
				{title}
			</StyledTitle>
			<StyledContent>{children}</StyledContent>
		</StyledAdmonitionContainer>
	);
};
