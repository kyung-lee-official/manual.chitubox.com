"use client";

import { useEffect } from "react";

export const UrlHashPilot = () => {
	useEffect(() => {
		const timer = setTimeout(() => {
			const hash = window.location.hash;
			const element = document.getElementById(decodeURI(hash).slice(1));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}, 1500);
		return () => clearTimeout(timer);
	}, []);
	return null;
};
