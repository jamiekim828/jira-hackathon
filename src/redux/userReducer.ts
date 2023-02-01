import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { UserType } from "../types/UserType";

const initialState: UserType[] = [];

export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  try {
    const users = await axios.get(
      "https://63d801935dbd723244319be0.mockapi.io/api/v1/users"
    );
    const data = users.data;
    return data;
  } catch (err) {
    const error = err as AxiosError;
    return error;
  }
});

export const addUser = createAsyncThunk("addUser", async (user: any) => {
  try {
    console.log(user);
    const response = await axios.post(
      `https://63d801935dbd723244319be0.mockapi.io/api/v1/users`,
      {
        name: user.fullName,
        email: user.email,
        password: user.password,
      }
    );
    const data = response.data;
    return data;
  } catch (err) {
    const error = err as AxiosError;
    return error;
  }
});

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(
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
      .addCase(addUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.push(action.payload);
        } else {
          return state;
        }
      });
  },
});

// You can use useAppDispatch from reduxHook.ts inside hooks folder to dispatch the thunkApi
// and get the user list
export const userReducer = UserSlice.reducer;
