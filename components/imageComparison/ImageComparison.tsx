import React from "react";
import styled from "styled-components";

const StyledImageComparisonContainer = styled.div`
	width: 100%;
	max-width: 1000px;
`;

const StyledRow = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledImgContainer = styled.div`
	flex: 1;
`;

const StyledText = styled.div`
	flex: 1;
	padding: 1rem 1rem;
	text-align: center;
	border-top: 1px solid #bfbfbf;
`;

export const ImageComparison: React.FC<any> = ({
	img1Src,
	text1,
	img2Src,
	text2,
}) => {
	return (
		<StyledImageComparisonContainer>
			<StyledRow>
				<StyledImgContainer>
					<picture>
						<img src={img1Src} alt={text1} width={"100%"} />
					</picture>
				</StyledImgContainer>
				<StyledImgContainer>
					<picture>
						<img src={img2Src} alt={text2} width={"100%"} />
					</picture>
				</StyledImgContainer>
			</StyledRow>
			<StyledRow>
				<StyledText>{text1}</StyledText>
				<StyledText>{text2}</StyledText>
			</StyledRow>
		</StyledImageComparisonContainer>
	);
};
