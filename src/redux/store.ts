import { configureStore } from "@reduxjs/toolkit";
import { projectReducer } from "./projectReducer";
import { userReducer } from "./userReducer";
import { detailReducer } from "./projectDetailReducer";
const store = configureStore({
  reducer: { projectReducer, userReducer, detailReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
