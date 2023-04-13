import React, { useState } from "react";
import styled from "styled-components";

const StyledLabelsWrapper = styled.div`
	display: flex;
	font-size: 1.3rem;
	gap: 2rem;
	cursor: pointer;
`;

interface IStyledLabel {
	$isActive: boolean;
}
const StyledLabel = styled.div<IStyledLabel>`
	color: ${(props) => (props.$isActive ? "#00aeff" : props.theme.textTitle)};
	&:hover {
		color: #00aeff;
	}
`;

const Labels = (props: any) => {

	const { items, activeKey, setActiveKey } = props;
	return (
		<StyledLabelsWrapper>
			{items.map((item: any, i: number) => {
				return (
					<StyledLabel
						key={i}
						onClick={() => {
							setActiveKey(item.key);
						}}
						$isActive={item.key === activeKey}
					>
						{item.label}
					</StyledLabel>
				);
			})}
		</StyledLabelsWrapper>
	);
};

export const Tabs = (props: any) => {
	const { defaultActiveKey, items, onChange } = props;
	const [activeKey, setActiveKey] = useState<"windows" | "macos" | "linux">(
		defaultActiveKey
	);
	return (
		<div>
			<Labels
				items={items}
				activeKey={activeKey}
				setActiveKey={setActiveKey}
			/>
			{items.map((item: any, i: number) => {
				if (item.key == activeKey) {
					return <div key={item.key}>{item.children}</div>;
				}
			})}
		</div>
	);
};
