"use client";

import dynamic from "next/dynamic";

export const DynamicFbVideoContainer = dynamic(
	() => import("./FacebookVideoContainer"),
	{
		ssr: false,
	}
);
