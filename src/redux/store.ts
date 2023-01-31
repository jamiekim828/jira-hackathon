import { configureStore } from "@reduxjs/toolkit";
import { projectReducer } from "./projectReducer";
import { userReducer } from "./userReducer";

const store = configureStore({
  reducer: { projectReducer, userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
