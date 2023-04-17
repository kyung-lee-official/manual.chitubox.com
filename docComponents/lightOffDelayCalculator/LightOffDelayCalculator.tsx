import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";

const StyledWindowContent = styled.div`
	display: flex;
	padding: 2rem 1rem;
	border-radius: 0 0 8px 8px;
	background-color: #ffffff;
`;

const StyledMachinePanel = styled.div`
	flex: 3;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;
`;

const StyledMachineAddRemove = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 0.5rem;
`;

const StyledMachineDefault = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	height: 30px;
	border: 1px #4eaeee solid;
	background-color: #4eaeee;
	border-radius: 5px;
`;

const Icon = (props: any) => {
	const { src, alt } = props;
	return (
		<img src={src} alt={alt} className="h-[30px] p-[6px] border-gray-300" />
	);
};

const StyledSplitLine = styled.div`
	height: 450px;
	background-color: lightgray;
	width: 3px;
	margin: 0 0.5rem;
`;

const StyledParamPanel = styled.div`
	flex: 15;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledParamBlockRow = styled.div`
	display: flex;
	gap: 0.4rem;
	color: black;
`;

const StyledParamTab = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	border: 1px lightgray solid;
	border-radius: 5px;
	color: black;
`;

interface StyledCol1LabelProps {
	$isActive: boolean;
}
interface StyledCol2LabelProps {
	$isActive: boolean;
}

const StyledCol1Label = styled.span<StyledCol1LabelProps>`
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: 180px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${(props) => (props.$isActive ? "black" : "#bfbfbf")};
`;
const StyledCol1Value = styled.div<StyledCol1LabelProps>`
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 60px;
	border: 1px solid ${(props) => (props.$isActive ? "black" : "#bfbfbf")};
	border-radius: 5px;
	cursor: ${(props) => (props.$isActive ? "cursor" : "not-allowed")};
`;

const StyledCol1Unit = styled.div<StyledCol1LabelProps>`
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 30px;
	color: ${(props) => (props.$isActive ? "black" : "#bfbfbf")};
`;
const StyledCol2Label = styled.span<StyledCol2LabelProps>`
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: 150px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${(props) => (props.$isActive ? "black" : "#bfbfbf")};
`;
const StyledCol2Value1 = styled.div<StyledCol2LabelProps>`
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 60px;
	border: 1px solid ${(props) => (props.$isActive ? "black" : "#bfbfbf")};
	border-radius: 5px;
	cursor: ${(props) => (props.$isActive ? "cursor" : "not-allowed")};
`;
const StyledCol2Sign = styled.div<StyledCol2LabelProps>`
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 12px;
	text-align: center;
	color: ${(props) => (props.$isActive ? "black" : "#bfbfbf")};
`;
const StyledCol2Value2 = styled.div<StyledCol2LabelProps>`
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 60px;
	border: 1px solid ${(props) => (props.$isActive ? "black" : "#bfbfbf")};
	border-radius: 5px;
	cursor: ${(props) => (props.$isActive ? "cursor" : "not-allowed")};
`;
const StyledCol2Unit = styled.div<StyledCol2LabelProps>`
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 65px;
	color: ${(props) => (props.$isActive ? "black" : "#bfbfbf")};
`;
const StyledInput = styled.input<StyledCol1LabelProps>`
	width: 100%;
	border: none;
	border-radius: 5px;
	text-align: center;
	color: black;
	&:focus {
		outline: none;
	}
	cursor: ${(props) => (props.$isActive ? "cursor" : "not-allowed")};
`;

const ParameterRow: React.FC<any> = ({
	col1Label,
	col1LabelIsActive,
	col1Value,
	col1ValueChange,
	col1ValueIsReadOnly,
	col1Unit,
	col2Label,
	col2LabelIsActive,
	col2Value1,
	col2Value1IsReadOnly,
	col2Value1Change,
	col2Sign,
	col2Value2,
	col2Value2IsReadOnly,
	col2Value2Change,
	col2Unit,
}: any) => {
	return (
		<div
			style={{
				height: "25px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				gap: "8px",
			}}
		>
			<StyledCol1Label title={col1Label} $isActive={col1LabelIsActive}>
				{col1Label}:
			</StyledCol1Label>
			<StyledCol1Value $isActive={col1LabelIsActive}>
				<StyledInput
					$isActive={col1LabelIsActive}
					disabled={!col1LabelIsActive}
					readOnly={col1ValueIsReadOnly}
					value={col1Value}
				/>
			</StyledCol1Value>
			<StyledCol1Unit $isActive={col1LabelIsActive}>
				{col1Unit}
			</StyledCol1Unit>
			<StyledCol2Label title={col2Label} $isActive={col2LabelIsActive}>
				{col2Label}:
			</StyledCol2Label>
			<StyledCol2Value1 $isActive={col2LabelIsActive}>
				<StyledInput
					$isActive={col2LabelIsActive}
					readOnly={col2Value1IsReadOnly}
					type={"number"}
					min={0}
					disabled={!col2LabelIsActive}
					value={col2Value1}
					onChange={col2Value1Change}
				/>
			</StyledCol2Value1>
			<StyledCol2Sign $isActive={col2LabelIsActive}>
				{col2Sign}
			</StyledCol2Sign>
			<StyledCol2Value2 $isActive={col2LabelIsActive}>
				<StyledInput
					$isActive={col2LabelIsActive}
					readOnly={col2Value2IsReadOnly}
					type={"number"}
					min={0}
					disabled={!col2LabelIsActive}
					value={col2Value2}
					onChange={col2Value2Change}
				/>
			</StyledCol2Value2>
			<StyledCol2Unit $isActive={col2LabelIsActive}>
				{col2Unit}
			</StyledCol2Unit>
		</div>
	);
};

const settingData = {
	en: {
		settings: "Settings",
		default: "Default",
		profile: "Profile",
		machine: "Machine",
		resin: "Resin",
		print: "Print",
		gcode: "Gcode",
		advanced: "Advanced",
		layerH: "Layer Height",
		bottomLC: "Bottom Layer Count",
		exposureT: "Exposure Time",
		bottomET: "Bottom Exposure Time",
		transitionLC: "Transition Layer Count",
		transitionT: "Transition Type",
		waitingM: "Waiting Mode During Printing",
		lightoffD: "Light-off Delay",
		bottomLoD: "Bottom Light-off Delay",
		bottomLD: "Bottom Lift Distance",
		liftingD: "Lifting Distance",
		bottomRD: "Bottom Restract Distance",
		retractD: "Retract Distance",
		bottomLS: "Bottom Lift Speed",
		liftingS: "Lifting Speed",
		bottomRS: "Bottom Restract Speed",
		retractS: "Restract Speed",
		expectedWT: "Expected wait time",
	},
	zh: {
		settings: "切片设置",
		default: "Default",
		profile: "Profile",
		machine: "机器",
		resin: "树脂",
		print: "打印",
		gcode: "Gcode",
		advanced: "高级",
		layerH: "层厚",
		bottomLC: "底层数",
		exposureT: "曝光时间",
		bottomET: "底层曝光时间",
		transitionLC: "过渡层数",
		transitionT: "过渡类型",
		waitingM: "打印过程等待模式",
		lightoffD: "灯灭延迟",
		bottomLoD: "底层灯灭延迟",
		bottomLD: "底层抬升距离",
		liftingD: "抬升距离",
		bottomRD: "底层回程距离",
		retractD: "回程距离",
		bottomLS: "底层抬升速度",
		liftingS: "抬升速度",
		bottomRS: "底层回程速度",
		retractS: "回程速度",
		expectedWT: "期待等待时间",
	},
};

type State = {
	lightOffDelay: number;
	distanceA1: number;
	distanceB1: number;
	speedA1: number;
	speedB1: number;
	distanceA2: number;
	distanceB2: number;
	speedA2: number;
	speedB2: number;
	expectedWaitTime: number;
};

type Action = {
	type: string;
	payload: number;
};

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "lightOffDelay":
			return {
				...state,
				lightOffDelay: action.payload,
			};
			break;
		case "distanceA1":
			return {
				...state,
				distanceA1: action.payload,
			};
			break;
		case "distanceB1":
			return {
				...state,
				distanceB1: action.payload,
			};
			break;
		case "speedA1":
			return {
				...state,
				speedA1: action.payload,
			};
			break;
		case "speedB1":
			return {
				...state,
				speedB1: action.payload,
			};
			break;
		case "distanceA2":
			return {
				...state,
				distanceA2: action.payload,
			};
			break;
		case "distanceB2":
			return {
				...state,
				distanceB2: action.payload,
			};
			break;
		case "speedA2":
			return {
				...state,
				speedA2: action.payload,
			};
			break;
		case "speedB2":
			return {
				...state,
				speedB2: action.payload,
			};
			break;
		case "expectedWaitTime":
			return {
				...state,
				expectedWaitTime: action.payload,
			};
			break;
		default:
			throw Error("Unknown action.");
			break;
	}
}

export const LightOffDelayCalculator: React.FC<any> = (props) => {
	const { lang } = props;
	let langTable;
	switch (lang) {
		case "en":
			langTable = settingData.en;
			break;
		case "zh":
			langTable = settingData.zh;
			break;
		default:
			langTable = settingData.en;
			break;
	}

	const initState: State = {
		lightOffDelay: 0,
		distanceA1: 5,
		distanceB1: 0,
		speedA1: 65,
		speedB1: 0,
		distanceA2: 5,
		distanceB2: 0,
		speedA2: 150,
		speedB2: 0,
		expectedWaitTime: 2,
	};

	const [state, dispatch] = useReducer<
		(state: State, action: Action) => State
	>(reducer, initState);

	/* A1 */
	const handleDistanceA1Change = (event: any) => {
		if (Number(event.target.value) <= 0) {
			dispatch({ type: "distanceA1", payload: 0.001 });
		} else {
			dispatch({
				type: "distanceA1",
				payload: Number(event.target.value),
			});
		}
	};

	const handleSpeedA1Change = (event: any) => {
		if (Number(event.target.value) <= 0) {
			dispatch({ type: "speedA1", payload: 0.001 });
		} else {
			dispatch({
				type: "speedA1",
				payload: Number(event.target.value),
			});
		}
	};

	/* B1 */
	const handleDistanceB1Change = (event: any) => {
		dispatch({ type: "distanceB1", payload: 0.001 });
	};
	const handleSpeedB1Change = (event: any) => {
		dispatch({
			type: "speedB1",
			payload: Number(event.target.value),
		});
	};

	/* A2 */
	// const handleDistanceA2Change = (event:any) => {
	// 	dispatch({ type: "distanceA2", payload:Number(event.target.value) });
	// };
	const handleSpeedA2Change = (event: any) => {
		if (Number(event.target.value) <= 0) {
			dispatch({ type: "speedA2", payload: 0.001 });
		} else {
			dispatch({
				type: "speedA2",
				payload: Number(event.target.value),
			});
		}
	};

	/* B2 */
	const handleDistanceB2Change = (event: any) => {
		dispatch({ type: "distanceB2", payload: Number(event.target.value) });
	};
	const handleSpeedB2Change = (event: any) => {
		dispatch({ type: "speedB2", payload: Number(event.target.value) });
	};

	/* Wait time */
	const handleExpectedWaitTimeChange = (event: any) => {
		dispatch({
			type: "expectedWaitTime",
			payload: Number(event.target.value),
		});
	};

	useEffect(() => {
		let subStageA1Time: number;
		let subStageB1Time: number;
		let subStageA2Time: number;
		let subStageB2Time: number;
		dispatch({
			type: "distanceA2",
			payload:
				state.distanceA1 + state.distanceB1 - state.distanceB2 > 0
					? state.distanceA1 + state.distanceB1 - state.distanceB2
					: 0,
		});
		state.speedA1 === 0
			? (subStageA1Time = 0)
			: (subStageA1Time = state.distanceA1 / state.speedA1); // Time unit: min
		state.speedB1 === 0
			? (subStageB1Time = 0)
			: (subStageB1Time = state.distanceB1 / state.speedB1); // Time unit: min
		state.speedA2 === 0
			? (subStageA2Time = 0)
			: (subStageA2Time = state.distanceA2 / state.speedA2); // Time unit: min
		state.speedB2 === 0
			? (subStageB2Time = 0)
			: (subStageB2Time = state.distanceB2 / state.speedB2); // Time unit: min
		dispatch({
			type: "lightOffDelay",
			payload: parseFloat(
				(
					(subStageA1Time +
						subStageB1Time +
						subStageA2Time +
						subStageB2Time) *
						60 +
					state.expectedWaitTime
				).toFixed(2)
			),
		});
	}, [
		state.distanceA1,
		state.distanceB1,
		state.distanceA2,
		state.distanceB2,
		state.speedA1,
		state.speedB1,
		state.speedA2,
		state.speedB2,
		state.expectedWaitTime,
	]);

	return (
		<div className="max-w-[1100px] overflow-x-auto overflow-y-hidden horizontal-scrollbar">
			<div className="min-w-[900px] font-medium">
				<div
					className="flex justify-between items-center px-4 h-9
                    text-white bg-gray-600 rounded-[8px_8px_0_0]"
				>
					<div>{langTable.settings}</div>
					<div>✕</div>
				</div>
				<StyledWindowContent>
					<StyledMachinePanel>
						<StyledMachineAddRemove>
							<Icon
								src="/images/components/lightOffDelayCalculator/add.svg"
								style={{ flex: "1" }}
							/>
							<Icon
								src="/images/components/lightOffDelayCalculator/delete.svg"
								style={{ flex: "1" }}
							/>
						</StyledMachineAddRemove>
						<StyledMachineDefault>
							{langTable.default}
						</StyledMachineDefault>
					</StyledMachinePanel>
					<StyledSplitLine />
					<StyledParamPanel>
						<StyledParamBlockRow>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									flex: 10,
									padding: "0rem 1rem",
									border: "1px gray solid",
									borderRadius: "5px",
								}}
							>
								{langTable.profile}
							</div>
							<Icon src="/images/components/lightOffDelayCalculator/add.svg" />
							<Icon src="/images/components/lightOffDelayCalculator/edit.svg" />
							<Icon src="/images/components/lightOffDelayCalculator/delete.svg" />
							<Icon src="/images/components/lightOffDelayCalculator/update.svg" />
							<Icon src="/images/components/lightOffDelayCalculator/import.svg" />
							<Icon src="/images/components/lightOffDelayCalculator/export.svg" />
							<Icon src="/images/components/lightOffDelayCalculator/batch_export.svg" />
						</StyledParamBlockRow>
						<StyledParamBlockRow>
							<StyledParamTab>{langTable.machine}</StyledParamTab>
							<StyledParamTab>{langTable.resin}</StyledParamTab>
							<StyledParamTab
								style={{
									color: "white",
									border: "1px #4EAEEE solid",
									backgroundColor: "#4EAEEE",
								}}
							>
								{langTable.print}
							</StyledParamTab>
							<StyledParamTab>{langTable.gcode}</StyledParamTab>
							<StyledParamTab>
								{langTable.advanced}
							</StyledParamTab>
						</StyledParamBlockRow>
						<StyledParamBlockRow>
							<div
								style={{
									flex: "1",
									display: "flex",
									flexDirection: "column",
									gap: "0.5rem",
									padding: "1rem",
								}}
							>
								<ParameterRow
									col1Label={langTable.layerH}
									col1Value={""}
									col1Unit={"mm"}
									col2Label={langTable.bottomLD}
									col2Value1={""}
									col2Sign={"+"}
									col2Value2={""}
									col2Unit={"mm"}
								/>
								<ParameterRow
									col1Label={langTable.bottomLC}
									col1Unit={""}
									col2Label={langTable.liftingD}
									col2LabelIsActive={true}
									col2Value1={state.distanceA1}
									col2Value1Change={handleDistanceA1Change}
									col2Sign={"+"}
									col2Value2={state.distanceB1}
									col2Value2Change={handleDistanceB1Change}
									col2Unit={"mm"}
								/>
								<ParameterRow
									col1Label={langTable.exposureT}
									col1Value={""}
									col1Unit={"s"}
									col2Label={langTable.bottomRD}
									col2Value1={""}
									col2Sign={"+"}
									col2Value2={""}
									col2Unit={"mm"}
								/>
								<ParameterRow
									col1Label={langTable.bottomET}
									col1Value={""}
									col1Unit={"s"}
									col2Label={langTable.retractD}
									col2LabelIsActive={true}
									col2Value1={state.distanceA2}
									col2Value1IsReadOnly={true}
									col2Sign={"+"}
									col2Value2={state.distanceB2}
									col2Value2Change={handleDistanceB2Change}
									col2Unit={"mm"}
								/>
								<ParameterRow
									col1Label={langTable.transitionLC}
									col1Value={""}
									col1Unit={""}
									col2Label={langTable.bottomLS}
									col2Value1={""}
									col2Sign={"&"}
									col2Value2={""}
									col2Unit={"mm/min"}
								/>
								<ParameterRow
									col1Label={langTable.transitionT}
									col1Value={""}
									col1Unit={""}
									col2Label={langTable.liftingS}
									col2LabelIsActive={true}
									col2Value1={state.speedA1}
									col2Value1Change={handleSpeedA1Change}
									col2Sign={"&"}
									col2Value2={state.speedB1}
									col2Value2Change={handleSpeedB1Change}
									col2Unit={"mm/min"}
								/>
								<ParameterRow
									col1Label={langTable.waitingM}
									col1Value={""}
									col1Unit={""}
									col2Label={langTable.bottomRS}
									col2Value1={""}
									col2Sign={"&"}
									col2Value2={""}
									col2Unit={"mm/min"}
								/>
								<ParameterRow
									col1Label={langTable.lightoffD}
									col1LabelIsActive={true}
									col1Value={state.lightOffDelay}
									col1ValueIsReadOnly={true}
									col1Unit={"s"}
									col2Label={langTable.retractS}
									col2LabelIsActive={true}
									col2Value1={state.speedA2}
									col2Value1Change={handleSpeedA2Change}
									col2Sign={"&"}
									col2Value2={state.speedB2}
									col2Value2Change={handleSpeedB2Change}
									col2Unit={"mm/min"}
								/>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										gap: "8px",
										margin: "0.5rem 0rem",
									}}
								>
									<StyledCol1Label
										title={langTable.bottomLoD}
										$isActive={false}
									>
										{langTable.bottomLoD}:
									</StyledCol1Label>
									<StyledCol1Value $isActive={false}>
										<StyledInput
											$isActive={false}
											disabled={true}
											readOnly={true}
											value={""}
										/>
									</StyledCol1Value>
									<StyledCol1Unit $isActive={false}>
										{"mm"}
									</StyledCol1Unit>
									<StyledCol2Label
										title={langTable.expectedWT}
										$isActive={true}
									>
										{langTable.expectedWT}:
									</StyledCol2Label>
									<StyledCol2Value1
										$isActive={true}
										style={{
											flexGrow: "0",
											flexShrink: "0",
											flexBasis: "148px",
										}}
									>
										<StyledInput
											$isActive={true}
											readOnly={false}
											type={"number"}
											min={0}
											disabled={false}
											value={state.expectedWaitTime}
											onChange={
												handleExpectedWaitTimeChange
											}
										/>
									</StyledCol2Value1>
									<StyledCol2Unit $isActive={true}>
										{"s"}
									</StyledCol2Unit>
								</div>
							</div>
						</StyledParamBlockRow>
					</StyledParamPanel>
				</StyledWindowContent>
			</div>
		</div>
	);
};
