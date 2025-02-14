"use client";

import dynamic from "next/dynamic";

export const DynamicHero = dynamic(() => import("./Hero"), {
	ssr: false,
});
