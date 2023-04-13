import type { AppProps } from "next/app";
import "../styles/globals.css";
import "katex/dist/katex.min.css";
import AppWrapper from "@/components/appWrapper/AppWrapper";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Theme, useThemeStore } from "stores/theme";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	const theme = useThemeStore((state) => state.theme);
	useEffect(() => {
		const className = "dark";
		const bodyClass = window.document.body.classList;
		if (theme === Theme.DARK) {
			bodyClass.add(className);
		} else {
			bodyClass.remove(className);
		}
	}, [theme]);

	return (
		<QueryClientProvider client={queryClient}>
			<AppWrapper>
				<Component {...pageProps} />
				<div id="portal"></div>
				{/* <ReactQueryDevtools /> */}
			</AppWrapper>
		</QueryClientProvider>
	);
}
