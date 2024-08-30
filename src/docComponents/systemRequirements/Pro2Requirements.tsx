"use client";

import { UbuntuIcon, MacOSIcon, WindowsIcon } from "@/components/icons/Icons";
import { ResponsiveTable } from "@/components/responsiveTable/ResponsiveTable";
import { Tabs } from "../tabs/Tabs";
import Link from "next/link";

const Label = (props: any) => {
	const { children } = props;
	return (
		<div className="flex justify-center items-center gap-2">{children}</div>
	);
};

const enItems = [
	{
		key: "windows",
		label: (
			<Label>
				<div>Windows</div>
				<WindowsIcon size={"24px"} />
			</Label>
		),
		children: (
			<div className="flex flex-col gap-8">
				<ResponsiveTable>
					<thead>
						<tr>
							<th>Specification</th>
							<th>Minimum</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>CPU</td>
							<td>Intel® Core™ i5 6600K or AMD Ryzen™ 5 1600</td>
						</tr>
						<tr>
							<td>OS</td>
							<td>Windows 10 (64-bit)</td>
						</tr>
						<tr>
							<td>RAM</td>
							<td>4GB</td>
						</tr>
						<tr>
							<td>Hard Drive</td>
							<td>At least 10GB of Storage Space</td>
						</tr>
						<tr>
							<td>GPU</td>
							<td>GPU RAM: ≥1GB</td>
						</tr>
						<tr>
							<td>Display Resolution </td>
							<td>≥ 1280x960</td>
						</tr>
					</tbody>
				</ResponsiveTable>
				<h3 className="text-2xl">Required Environments</h3>
				<Link
					href="https://www.microsoft.com/en-us/download/details.aspx?id=30653"
					className="text-blue-400"
				>
					.NET Framework 4.5
				</Link>
				<Link
					href="https://www.microsoft.com/en-us/download/details.aspx?id=30679"
					className="text-blue-400"
				>
					Visual C++ Redistributable Packages for Visual Studio 2012
				</Link>
				<Link
					href="https://www.microsoft.com/en-us/download/details.aspx?id=40784"
					className="text-blue-400"
				>
					Visual C++ Redistributable Packages for Visual Studio 2013
				</Link>
				<Link
					href="https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0"
					className="text-blue-400"
				>
					Visual C++ Redistributable for Visual Studio 2015, 2017 and
					2019
				</Link>
			</div>
		),
	},
	{
		key: "macos",
		label: (
			<Label>
				<div>macOS</div>
				<MacOSIcon size={"24px"} />
			</Label>
		),
		children: (
			// <ResponsiveTable>
			// 	<thead>
			// 		<tr>
			// 			<th>Specification</th>
			// 			<th>Minimum</th>
			// 		</tr>
			// 	</thead>
			// 	<tbody>
			// 		<tr>
			// 			<td>CPU</td>
			// 			<td>Intel® or M1, M2 processors</td>
			// 		</tr>
			// 		<tr>
			// 			<td>OS</td>
			// 			<td>macOS Big Sur (version 11.7)</td>
			// 		</tr>
			// 	</tbody>
			// </ResponsiveTable>
			<div
				className="flex justify-center items-center p-4 my-8
				text-neutral-500 text-2xl
				bg-neutral-100
				border border-neutral-200
				rounded-md"
			>
				macOS version is coming soon. Stay tuned...
			</div>
		),
	},
	{
		key: "ubuntu",
		label: (
			<Label>
				<div>Ubuntu</div>
				<UbuntuIcon size={"24px"} />
			</Label>
		),
		children: (
			// <ResponsiveTable>
			// 	<thead>
			// 		<tr>
			// 			<th>Specification</th>
			// 			<th>Minimum</th>
			// 		</tr>
			// 	</thead>
			// 	<tbody>
			// 		<tr>
			// 			<td>CPU</td>
			// 			<td>Intel® Core™ i5 6600K or AMD Ryzen™ 5 1600</td>
			// 		</tr>
			// 		<tr>
			// 			<td>OS</td>
			// 			<td>Ubuntu 20.04 LTS</td>
			// 		</tr>
			// 		<tr>
			// 			<td>RAM</td>
			// 			<td>4GB</td>
			// 		</tr>
			// 		<tr>
			// 			<td>Hard Drive</td>
			// 			<td>At least 10GB of Storage Space</td>
			// 		</tr>
			// 		<tr>
			// 			<td>GPU</td>
			// 			<td>GPU RAM: ≥1GB</td>
			// 		</tr>
			// 		<tr>
			// 			<td>Display Resolution </td>
			// 			<td>≥ 1280x960</td>
			// 		</tr>
			// 	</tbody>
			// </ResponsiveTable>
			<div
				className="flex justify-center items-center p-4 my-8
				text-neutral-500 text-2xl
				bg-neutral-100
				border border-neutral-200
				rounded-md"
			>
				Ubuntu version is coming soon. Stay tuned...
			</div>
		),
	},
];

const zhItems = [
	{
		key: "windows",
		label: (
			<Label>
				<div>Windows</div>
				<WindowsIcon size={"24px"} />
			</Label>
		),
		children: (
			<div className="flex flex-col gap-8">
				<ResponsiveTable>
					<thead>
						<tr>
							<th>规格</th>
							<th>最低配置</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>处理器</td>
							<td>Intel® Core™ i5 6600K 或 AMD Ryzen™ 5 1600</td>
						</tr>
						<tr>
							<td>操作系统</td>
							<td>Windows 10 (64-bit)</td>
						</tr>
						<tr>
							<td>内存</td>
							<td>4GB</td>
						</tr>
						<tr>
							<td>硬盘</td>
							<td>不低于 10GB 的硬盘存储空间</td>
						</tr>
						<tr>
							<td>显卡</td>
							<td>GPU 显存: ≥1GB</td>
						</tr>
						<tr>
							<td>显示器分辨率</td>
							<td>≥ 1280x960</td>
						</tr>
					</tbody>
				</ResponsiveTable>
				<h3 className="text-2xl">所需运行环境</h3>
				<Link
					href="https://www.microsoft.com/en-us/download/details.aspx?id=30653"
					className="text-blue-400"
				>
					.NET Framework 4.5
				</Link>
				<Link
					href="https://www.microsoft.com/en-us/download/details.aspx?id=30679"
					className="text-blue-400"
				>
					Visual C++ Redistributable Packages for Visual Studio 2012
				</Link>
				<Link
					href="https://www.microsoft.com/en-us/download/details.aspx?id=40784"
					className="text-blue-400"
				>
					Visual C++ Redistributable Packages for Visual Studio 2013
				</Link>
				<Link
					href="https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0"
					className="text-blue-400"
				>
					Visual C++ Redistributable for Visual Studio 2015, 2017 and
					2019
				</Link>
			</div>
		),
	},
	{
		key: "macos",
		label: (
			<Label>
				<div>macOS</div>
				<MacOSIcon size={"24px"} />
			</Label>
		),
		children: (
			// <ResponsiveTable>
			// 	<thead>
			// 		<tr>
			// 			<th>规格</th>
			// 			<th>最低配置</th>
			// 		</tr>
			// 	</thead>
			// 	<tbody>
			// 		<tr>
			// 			<td>处理器</td>
			// 			<td>Intel® 或 M1, M2 处理器</td>
			// 		</tr>
			// 		<tr>
			// 			<td>操作系统</td>
			// 			<td>macOS Big Sur (11.7 版本)</td>
			// 		</tr>
			// 	</tbody>
			// </ResponsiveTable>
			<div
				className="flex justify-center items-center p-4 my-8
				text-neutral-500 text-2xl
				bg-neutral-100
				border border-neutral-200
				rounded-md"
			>
				macOS 版本正在开发中，敬请期待...
			</div>
		),
	},
	{
		key: "ubuntu",
		label: (
			<Label>
				<div>Ubuntu</div>
				<UbuntuIcon size={"24px"} />
			</Label>
		),
		children: (
			// <ResponsiveTable>
			// 	<thead>
			// 		<tr>
			// 			<th>规格</th>
			// 			<th>最低配置</th>
			// 		</tr>
			// 	</thead>
			// 	<tbody>
			// 		<tr>
			// 			<td>处理器</td>
			// 			<td>Intel® Core™ i5 6600K 或 AMD Ryzen™ 5 1600</td>
			// 		</tr>
			// 		<tr>
			// 			<td>操作系统</td>
			// 			<td>Ubuntu 20.04 LTS</td>
			// 		</tr>
			// 		<tr>
			// 			<td>内存</td>
			// 			<td>4GB</td>
			// 		</tr>
			// 		<tr>
			// 			<td>硬盘</td>
			// 			<td>不低于 10GB 的硬盘存储空间</td>
			// 		</tr>
			// 		<tr>
			// 			<td>显卡</td>
			// 			<td>GPU 显存: ≥1GB</td>
			// 		</tr>
			// 		<tr>
			// 			<td>显示器分辨率</td>
			// 			<td>≥ 1280x960</td>
			// 		</tr>
			// 	</tbody>
			// </ResponsiveTable>
			<div
				className="flex justify-center items-center p-4 my-8
				text-neutral-500 text-2xl
				bg-neutral-100
				border border-neutral-200
				rounded-md"
			>
				Ubuntu 版本正在开发中，敬请期待...
			</div>
		),
	},
];

const zh_twItems = [
	{
		key: "windows",
		label: (
			<Label>
				<div>Windows</div>
				<WindowsIcon size={"24px"} />
			</Label>
		),
		children: (
			<ResponsiveTable>
				<thead>
					<tr>
						<th>規格</th>
						<th>最低配置</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>處理器</td>
						<td>Intel® Core™ i5 6600K 或 AMD Ryzen™ 5 1600</td>
					</tr>
					<tr>
						<td>操作系統</td>
						<td>Windows 10 (64-bit)</td>
					</tr>
					<tr>
						<td>内存</td>
						<td>4GB</td>
					</tr>
					<tr>
						<td>硬盤</td>
						<td>不低於 10GB 的硬盤存儲空間</td>
					</tr>
					<tr>
						<td>顯卡</td>
						<td>GPU 顯存: ≥1GB</td>
					</tr>
					<tr>
						<td>顯示器分辨率</td>
						<td>≥ 1280x960</td>
					</tr>
				</tbody>
			</ResponsiveTable>
		),
	},
	{
		key: "macos",
		label: (
			<Label>
				<div>macOS</div>
				<MacOSIcon size={"24px"} />
			</Label>
		),
		children: (
			<ResponsiveTable>
				<thead>
					<tr>
						<th>規格</th>
						<th>最低配置</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>處理器</td>
						<td>Intel® 或 M1, M2 處理器</td>
					</tr>
					<tr>
						<td>操作系統</td>
						<td>macOS Big Sur (11.7 版本)</td>
					</tr>
				</tbody>
			</ResponsiveTable>
		),
	},
	{
		key: "ubuntu",
		label: (
			<Label>
				<div>Ubuntu</div>
				<UbuntuIcon size={"24px"} />
			</Label>
		),
		children: (
			<ResponsiveTable>
				<thead>
					<tr>
						<th>規格</th>
						<th>最低配置</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>處理器</td>
						<td>Intel® Core™ i5 6600K 或 AMD Ryzen™ 5 1600</td>
					</tr>
					<tr>
						<td>操作系統</td>
						<td>Ubuntu 20.04 LTS</td>
					</tr>
					<tr>
						<td>内存</td>
						<td>4GB</td>
					</tr>
					<tr>
						<td>硬盤</td>
						<td>不低於 10GB 的硬盤存儲空間</td>
					</tr>
					<tr>
						<td>顯卡</td>
						<td>GPU 顯存: ≥1GB</td>
					</tr>
					<tr>
						<td>顯示器分辨率</td>
						<td>≥ 1280x960</td>
					</tr>
				</tbody>
			</ResponsiveTable>
		),
	},
];

const onChange = (key: string) => {};

export const Pro2Requirements = (props: any) => {
	const { lang } = props;
	let langTable;
	switch (lang) {
		case "en":
			langTable = enItems;
			break;
		case "zh":
			langTable = zhItems;
			break;
		case "zh-TW":
			langTable = zh_twItems;
			break;
		default:
			langTable = enItems;
			break;
	}

	return (
		<Tabs
			defaultActiveKey="windows"
			items={langTable}
			onChange={onChange}
		/>
	);
};
