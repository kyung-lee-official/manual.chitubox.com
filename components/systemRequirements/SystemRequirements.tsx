import React from "react";
import { ResponsiveTable } from "../responsiveTable";
import { Tabs, TabsProps } from "antd";

const items: TabsProps["items"] = [
	{
		key: "windows",
		label: `Windows`,
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
						<td>Windows 10 (64-bit)</td>
					</tr>
				</tbody>
			</ResponsiveTable>
		),
	},
	{
		key: "macos",
		label: `macOS`,
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
						<td>macOS</td>
						<td>macOS</td>
					</tr>
					<tr>
						<td>Hard Drive</td>
						<td>Larger than 10GB</td>
						<td>Larger than 20GB SSD</td>
					</tr>
					<tr>
						<td>GPU</td>
						<td>GPU RAM: ≥1GB</td>
						<td>GPU RAM: ≥1GB</td>
					</tr>
					<tr>
						<td>Display Resolution</td>
						<td>≥ 1280x960</td>
						<td>≥ 1280x1024</td>
					</tr>
				</tbody>
			</ResponsiveTable>
		),
	},
	{
		key: "linux",
		label: `Linux`,
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
						<td>GPU</td>
						<td>GPU RAM: ≥1GB</td>
						<td>GPU RAM: ≥1GB</td>
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
		<Tabs defaultActiveKey="windows" items={items} onChange={onChange} />
	);
};
