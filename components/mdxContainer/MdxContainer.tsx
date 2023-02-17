import { MDXProvider } from "@mdx-js/react";
import React from "react";
import styled from "styled-components";
import { MDXComponent } from "..";
import { VersionTag } from "../versionTag";

const StyledMdxContainer = styled.div`
	flex-grow: 1;
	flex-shrink: 1;
	flex-basis: auto;
	min-width: 0;
	padding: 2rem 3rem;
`;

export const MdxContainer: React.FC<any> = (props) => {
	const { children } = props;

	return (
		<StyledMdxContainer>
			<VersionTag />
			<MDXProvider components={MDXComponent}>{children}</MDXProvider>
		</StyledMdxContainer>
	);
};
