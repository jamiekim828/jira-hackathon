import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { ProjectType } from "../types/ProjectType";

import { UserType } from "../types/UserType";

const initialState: UserType[] = [];

export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  try {
    const users = await axios.get(
      "https://63d801935dbd723244319be0.mockapi.io/api/v1/users"
    );
    const data = users.data;
    console.log(data);
    return data;
  } catch (err) {
    const error = err as AxiosError;
    return error;
  }
});

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {

  },
  extraReducers: (build) => {
    build.
    addCase(
      fetchAllUsers.fulfilled,
      (state, action: PayloadAction<UserType[] | AxiosError>) => {
        if (action.payload && "message" in action.payload) {
          return state;
        } else if (!action.payload) {
          return state;
        }
        return action.payload;
      }
    )

  },
});

// You can use useAppDispatch from reduxHook.ts inside hooks folder to dispatch the thunkApi
// and get the user list
export const userReducer = UserSlice.reducer;
