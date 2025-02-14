"use client";

import React, { useEffect, useReducer } from "react";

const Icon = (props: any) => {
	const { src, alt } = props;
	return (
		<img src={src} alt={alt} className="h-[30px] p-[6px] border-gray-300" />
	);
};

const ParamBlockRow: React.FC<any> = (props: any) => {
	const { children } = props;
	return <div className="flex gap-2 text-gray-900">{children}</div>;
};

const ParamTab = (props: any) => {
	const { children } = props;
	return (
		<div
			className="flex-1 flex justify-center items-center h-[30]
            text-gray-900 border border-gray-300 rounded-md"
		>
			{children}
		</div>
	);
};

const Col1Label = (props: any) => {
	const { isActive, children } = props;
	return (
		<span
			className={`flex-[1_0_180px] 
            ${isActive ? "text-black" : "text-gray-400"}
            whitespace-nowrap overflow-hidden text-overflow-ellipsis`}
		>
			{children}
		</span>
	);
};

const Col1Value = (props: any) => {
	const { isActive, children } = props;
	return (
		<div
			className={`flex-[0_0_60px] 
            border-[1px_solid] 
            ${isActive ? "border-black" : "border-gray-400"}
            ${isActive ? "cursor-pointer" : "cursor-not-allowed"}
            rounded-[5px]`}
		>
			{children}
		</div>
	);
};

const Col1Unit = (props: any) => {
	const { isActive, children } = props;
	return (
		<div
			className={`flex-[0_0_30px] ${
				isActive ? "text-black" : "text-gray-400"
			}`}
		>
			{children}
		</div>
	);
};

const Col2Label = (props: any) => {
	const { isActive, children } = props;
	return (
		<div
			className={`flex-[1_0_150px] ${
				isActive ? "text-black" : "text-gray-400"
			} whitespace-nowrap overflow-hidden text-overflow-ellipsis`}
		>
			{children}
		</div>
	);
};

const Col2Value1 = (props: any) => {
	const { isActive, children } = props;
	return (
		<div
			className={`flex-[0_0_60px] border-[1px_solid]
            ${isActive ? "border-black" : "border-gray-400"} 
            ${isActive ? "cursor-pointer" : "cursor-not-allowed"}
            rounded-[5px]`}
		>
			{children}
		</div>
	);
};

const Col2Sign = (props: any) => {
	const { isActive, children } = props;
	return (
		<div
			className={`flex-[0_0_12px] ${
				isActive ? "text-black" : "text-gray-400"
			} text-center`}
		>
			{children}
		</div>
	);
};

const Col2Value2 = (props: any) => {
	const { isActive, children } = props;
	return (
		<div
			className={`flex-[0_0_60px] border-[1px_solid]
            ${isActive ? "border-black" : "border-gray-400"}
            ${isActive ? "cursor-pointer" : "cursor-not-allowed"}
            rounded-[5px]`}
		>
			{children}
		</div>
	);
};

const Col2Unit = (props: any) => {
	const { isActive, children } = props;
	return (
		<div
			className={`flex-[0_0_65px] ${
				isActive ? "text-black" : "text-gray-400"
			}`}
		>
			{children}
		</div>
	);
};

const Input = (props: any) => {
	const { isActive, readOnly, type, min, disabled, value, onChange } = props;
	return (
		<input
			className={`w-full border-none rounded-[5px] text-center
            text-black ${isActive ? "cursor-pointer" : "cursor-not-allowed"}
            focus:outline-none`}
			readOnly={readOnly}
			type={type}
			min={min}
			value={value}
			onChange={onChange}
			disabled={disabled}
		/>
	);
};

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
			<Col1Label title={col1Label} isActive={col1LabelIsActive}>
				{col1Label}:
			</Col1Label>
			<Col1Value isActive={col1LabelIsActive}>
				<Input
					isActive={col1LabelIsActive}
					disabled={!col1LabelIsActive}
					readOnly={col1ValueIsReadOnly}
					value={col1Value}
				/>
			</Col1Value>
			<Col1Unit isActive={col1LabelIsActive}>{col1Unit}</Col1Unit>
			<Col2Label title={col2Label} isActive={col2LabelIsActive}>
				{col2Label}:
			</Col2Label>
			<Col2Value1 isActive={col2LabelIsActive}>
				<Input
					isActive={col2LabelIsActive}
					readOnly={col2Value1IsReadOnly}
					type={"number"}
					min={0}
					disabled={!col2LabelIsActive}
					value={col2Value1}
					onChange={col2Value1Change}
				/>
			</Col2Value1>
			<Col2Sign isActive={col2LabelIsActive}>{col2Sign}</Col2Sign>
			<Col2Value2 isActive={col2LabelIsActive}>
				<Input
					isActive={col2LabelIsActive}
					readOnly={col2Value2IsReadOnly}
					type={"number"}
					min={0}
					disabled={!col2LabelIsActive}
					value={col2Value2}
					onChange={col2Value2Change}
				/>
			</Col2Value2>
			<Col2Unit isActive={col2LabelIsActive}>{col2Unit}</Col2Unit>
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
	zh_tw: {
		settings: "設定",
		default: "Default",
		profile: "Profile",
		machine: "機器",
		resin: "樹脂",
		print: "列印",
		gcode: "Gcode",
		advanced: "進階",
		layerH: "層高度",
		bottomLC: "底層數",
		exposureT: "曝光時間",
		bottomET: "底層曝光時間",
		transitionLC: "過度層數",
		transitionT: "過渡類型",
		waitingM: "列印過程等待模式",
		lightoffD: "燈滅延遲",
		bottomLoD: "底層燈滅延遲",
		bottomLD: "底層抬升距離",
		liftingD: "抬升距離",
		bottomRD: "底層回程距離",
		retractD: "回程距離",
		bottomLS: "底層抬升速度",
		liftingS: "抬升速度",
		bottomRS: "底層回程速度",
		retractS: "回程速度",
		expectedWT: "期待等待時間",
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
		case "zh_tw":
			langTable = settingData.zh_tw;
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

	const [state, dispatch] = useReducer(reducer, initState);

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
		<div
			className="max-w-[1100px] my-6
            overflow-x-auto overflow-y-hidden horizontal-scrollbar"
		>
			<div className="min-w-[900px] font-medium">
				<div
					className="flex justify-between items-center px-4 h-9
                    text-white bg-gray-600 rounded-[8px_8px_0_0]"
				>
					<div>{langTable.settings}</div>
					<div>✕</div>
				</div>
				<div
					className="flex px-4 py-8
                    bg-white rounded-[0_0_8px_8px]"
				>
					<div className="flex-[3] flex flex-col justify-start gap-4">
						<div className="flex justify-between gap-2">
							<Icon
								src="/images/components/lightOffDelayCalculator/add.svg"
								style={{ flex: "1" }}
							/>
							<Icon
								src="/images/components/lightOffDelayCalculator/delete.svg"
								style={{ flex: "1" }}
							/>
						</div>
						<div
							className="flex justify-center items-center
                            text-white bg-sky-500 rounded-[5px]"
						>
							{langTable.default}
						</div>
					</div>
					<div
						className="w-[3px] h-[450px] mx-2
                        bg-gray-300"
					/>
					<div className="flex-[15] flex flex-col gap-4">
						<ParamBlockRow>
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
						</ParamBlockRow>
						<ParamBlockRow>
							<ParamTab>{langTable.machine}</ParamTab>
							<ParamTab>{langTable.resin}</ParamTab>
							<ParamTab
								style={{
									color: "white",
									border: "1px #4EAEEE solid",
									backgroundColor: "#4EAEEE",
								}}
							>
								{langTable.print}
							</ParamTab>
							<ParamTab>{langTable.gcode}</ParamTab>
							<ParamTab>{langTable.advanced}</ParamTab>
						</ParamBlockRow>
						<ParamBlockRow>
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
									<Col1Label
										title={langTable.bottomLoD}
										isActive={false}
									>
										{langTable.bottomLoD}:
									</Col1Label>
									<Col1Value isActive={false}>
										<Input
											isActive={false}
											disabled={true}
											readOnly={true}
											value={""}
										/>
									</Col1Value>
									<Col1Unit isActive={false}>{"mm"}</Col1Unit>
									<Col2Label
										title={langTable.expectedWT}
										isActive={true}
									>
										{langTable.expectedWT}:
									</Col2Label>
									<Col2Value1
										isActive={true}
										style={{
											flexGrow: "0",
											flexShrink: "0",
											flexBasis: "148px",
										}}
									>
										<Input
											isActive={true}
											readOnly={false}
											type={"number"}
											min={0}
											disabled={false}
											value={state.expectedWaitTime}
											onChange={
												handleExpectedWaitTimeChange
											}
										/>
									</Col2Value1>
									<Col2Unit isActive={true}>{"s"}</Col2Unit>
								</div>
							</div>
						</ParamBlockRow>
					</div>
				</div>
			</div>
		</div>
	);
};
