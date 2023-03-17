import React from "react";
import { ResponsiveTable } from "../responsiveTable";
import { Tabs } from "..";

const WindowsIcon = () => {
	return (
		<svg
			viewBox="0 0 24 24"
			height="24"
			width="24"
			focusable="false"
			role="img"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m3 5.557 7.357-1.002.004 7.097-7.354.042L3 5.557zm7.354 6.913.006 7.103-7.354-1.011v-6.14l7.348.048zm.892-8.046L21.001 3v8.562l-9.755.077V4.424zm9.758 8.113-.003 8.523-9.755-1.378-.014-7.161 9.772.016z"></path>
		</svg>
	);
};

const enItems = [
	{
		key: "windows",
		label: (
			<div>
				Windows <WindowsIcon />
			</div>
		),
		children: (
			<ResponsiveTable>
				<thead>
					<tr>
						<th>Specification</th>
						<th>Mininum</th>
						<th>Recommended</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>CPU</td>
						<td>Intel® Core™ i5 6600K or AMD Ryzen™ 5 1600</td>
						<td>Intel Core i7 4790 or AMD Ryzen 7 2700X</td>
					</tr>
					<tr>
						<td>OS</td>
						<td>Windows 7 (64-bit)</td>
						<td>Windows 10 or Windows 11</td>
					</tr>
					<tr>
						<td>RAM</td>
						<td>16GB</td>
						<td>32GB or larger</td>
					</tr>
					<tr>
						<td>Hard Drive</td>
						<td>Larger than 10GB</td>
						<td>Larger than 20GB SSD</td>
					</tr>
					<tr>
						<td>GPU</td>
						<td>GPU RAM: ≥1GB</td>
						<td>GPU RAM: ≥4GB</td>
					</tr>
					<tr>
						<td>Display Resolution </td>
						<td>≥ 1280x960</td>
						<td>≥ 1280x1024</td>
					</tr>
				</tbody>
			</ResponsiveTable>
		),
	},
	{
		key: "macos",
		label: <div>macOS</div>,
		children: (
			<ResponsiveTable>
				<thead>
					<tr>
						<th>Specification</th>
						<th>Mininum</th>
						<th>Recommended</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>CPU</td>
						<td>Intel® or M1, M2 processors</td>
						<td>Intel® or M1, M2 processors</td>
					</tr>
					<tr>
						<td>OS</td>
						<td>macOS High Sierra (version 10.15)</td>
						<td>macOS Big Sur (version 11.6) or above</td>
					</tr>
				</tbody>
			</ResponsiveTable>
		),
	},
	{
		key: "linux",
		label: <div>Linux</div>,
		children: (
			<ResponsiveTable>
				<thead>
					<tr>
						<th>Specification</th>
						<th>Mininum</th>
						<th>Recommended</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>CPU</td>
						<td>Intel® Core™ i5 6600K or AMD Ryzen™ 5 1600</td>
						<td>Intel Core i7 4790 or AMD Ryzen 7 2700X</td>
					</tr>
					<tr>
						<td>OS</td>
						<td>Ubuntu 20.04 LTS</td>
						<td>Ubuntu 22.04 LTS</td>
					</tr>
					<tr>
						<td>RAM</td>
						<td>16GB</td>
						<td>32GB or larger</td>
					</tr>
					<tr>
						<td>Hard Drive</td>
						<td>Larger than 10GB</td>
						<td>Larger than 20GB SSD</td>
					</tr>
				</tbody>
			</ResponsiveTable>
		),
	},
];

const onChange = (key: string) => {
	console.log(key);
};

export const SystemRequirements = (props: any) => {
	const { lang } = props;

	return (
		<Tabs defaultActiveKey="windows" items={enItems} onChange={onChange} />
	);
};
