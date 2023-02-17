import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import rootStore from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import StoreWrapper from "redux/storeWrapper/StoreWrapper";
import "../styles/globals.css";
import "katex/dist/katex.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={rootStore.store}>
			<PersistGate persistor={rootStore.persistor}>
				<StoreWrapper>
					<QueryClientProvider client={queryClient}>
						<Component {...pageProps} />
						<div id="portal"></div>
						{/* <ReactQueryDevtools /> */}
					</QueryClientProvider>
				</StoreWrapper>
			</PersistGate>
		</Provider>
	);
}
