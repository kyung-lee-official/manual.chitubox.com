import React, { useContext } from "react";
import styled from "styled-components";
import { DocContext } from "../docsLayout";

const StyledVersionTag = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: max-content;
	height: 30px;
	padding: 0rem 0.8rem 0rem 0.8rem;
	margin: 0 0 30px 0;
	font-weight: bold;
	border-radius: 12px;
	color: ${(props) => props.theme.versionNumber};
	background-color: ${(props) => props.theme.versionNumberBackground};
	box-shadow: -4px -5px 7px ${(props) => props.theme.headerItemHighlight},
		4px 5px 7px ${(props) => props.theme.headerItemShadow};
	transition-duration: ${(props) => props.theme.transitionDuration};
`;

export const VersionTag: React.FC<any> = (props) => {
	const { versionedContext } = useContext(DocContext);

	return (
		<div
			className="flex justify-center items-center max-w-max h-8 px-4 mb-8
            font-medium text-sm text-gray-800 dark:text-gray-200
            bg-gray-50 dark:bg-gray-600
            shadow-md rounded-full"
		>
			Version: {versionedContext.versionNumber}
		</div>
	);
};
