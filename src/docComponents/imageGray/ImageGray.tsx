"use client";

import Image from "next/image";
import imageGray from "./imageGray.jpg";
import { useTranslations } from "next-intl";

export const ImageGray = () => {
	const t = useTranslations("docComponents");
	return (
		<div className="flex gap-2">
			<figure className="brightness-100">
				<Image
					src={imageGray}
					alt="image gray"
					width={600}
					height={400}
				/>
				<figcaption className="flex justify-center">
					{t("imageGray")} 255
				</figcaption>
			</figure>
			<figure className="brightness-50">
				<Image
					src={imageGray}
					alt="image gray"
					width={600}
					height={400}
				/>
				<figcaption className="flex justify-center">
					{t("imageGray")} 128
				</figcaption>
			</figure>
		</div>
	);
};
