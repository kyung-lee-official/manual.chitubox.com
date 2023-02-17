import styled from "styled-components";

export const StyledTable = styled.table`
	width: 100%;
	min-width: 700px;
	border-collapse: separate;
	border-spacing: 0px 0px;
	text-align: center;
	font-weight: bold;
	line-height: 2rem;
	& > thead {
		th {
			background-color: ${(props) => props.theme.tableThBackground};
			padding: 0.8rem;
			border-bottom: 1px solid ${(props) => props.theme.tableTdBorder};
		}
	}
	& > tbody {
		td {
			padding: 0.4rem 0.8rem 0.4rem 0.8rem;
			text-align: left;
			border: 2px solid ${(props) => props.theme.tableTdBorder};
		}
		tr:last-child {
			td:first-child {
				border-bottom-left-radius: 10px;
			}
			td:last-child {
				border-bottom-right-radius: 10px;
			}
		}
	}
`;

const ScrollableWrapper = styled.div`
	display: flex;
	width: 100%;
	margin: auto;
	border-radius: 10px;
	box-shadow: 0px 0px 10px 0px hsla(0, 0%, 0%, 0.7);
	overflow-x: auto;
	margin: 2rem 0;
	::-webkit-scrollbar:horizontal {
		height: 6px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 3px;
		background-color: ${(props) => props.theme.sidebarScrollbarThumb};
	}
	&::-webkit-scrollbar-thumb {
		&:hover {
			border-radius: 3px;
			background-color: ${(props) => props.theme.sidebarScrollbarHover};
		}
	}
`;

export const ResponsiveTable: React.FC<any> = ({ children }) => {
	return (
		<ScrollableWrapper>
			<StyledTable>{children}</StyledTable>
		</ScrollableWrapper>
	);
};
