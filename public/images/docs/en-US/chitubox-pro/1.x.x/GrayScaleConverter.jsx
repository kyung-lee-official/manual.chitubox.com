import React, { useState, useEffect } from "react";

const ColorTag = ({ start, end = 255 }) => {
	return (
		<div
			style={{
				height: "1.5rem",
				width: "100%",
				background: `linear-gradient(to right, rgb(${start},${start},${start}), rgb(${end},${end},${end}))`,
				borderRadius: "5px",
			}}
		></div>
	);
};

const GrayScaleConverter = ({ language }) => {
	const optionCounts = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	const [currentOption, setCurrentOption] = useState(0);
	const [currentGrayScale, setCurrentGrayScale] = useState(0);
	const [dropdownExpand, setDropdownExpand] = useState(false);

	useEffect(() => {
		if (currentOption === 0) {
			setCurrentGrayScale(0);
		} else {
			setCurrentGrayScale((256 / 8) * currentOption - 1);
		}
	}, [currentOption]);

	return (
		<table>
			<thead>
				<tr>
					<th>
						Basic ({language === "zh" ? "灰度级别" : "Gray Level"} )
					</th>
					<th>
						Pro ({language === "zh" ? "灰度范围" : "Gray Range"})
					</th>
					<th>{language === "zh" ? "颜色参考" : "Color Reference"}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>31~255</td>
					<td>
						<div>
							<ColorTag start={31} />
						</div>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>63~255</td>
					<td>
						<div>
							<ColorTag start={63} />
						</div>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td>95~255</td>
					<td>
						<div>
							<ColorTag start={95} />
						</div>
					</td>
				</tr>
				<tr>
					<td>4</td>
					<td>127~255</td>
					<td>
						<div>
							<ColorTag start={127} />
						</div>
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td>159~255</td>
					<td>
						<div>
							<ColorTag start={159} />
						</div>
					</td>
				</tr>
				<tr>
					<td>6</td>
					<td>191~255</td>
					<td>
						<div>
							<ColorTag start={191} />
						</div>
					</td>
				</tr>
				<tr>
					<td>7</td>
					<td>223~255</td>
					<td>
						<div>
							<ColorTag start={223} />
						</div>
					</td>
				</tr>
				<tr>
					<td>8</td>
					<td>255</td>
					<td>
						<div>
							<ColorTag start={255} />
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default GrayScaleConverter;
