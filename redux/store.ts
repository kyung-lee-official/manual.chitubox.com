import { combineReducers, configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language/slice";
import storeVersionReducer from "./storeVersion/slice";
import themeReducer from "./theme/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["storeVersion", "language", "theme"]
};

const rootReducer = combineReducers({
	language: languageReducer,
	storeVersion: storeVersionReducer,
	theme: themeReducer,
});

const persistedRuducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedRuducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	}),
	devTools: true,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default { store, persistor };
