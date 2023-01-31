import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { ProjectType } from "../types/ProjectType";

const initialState: ProjectType[] = [];

export const fetchAllProjects = createAsyncThunk(
  "fetchAllProjects",
  async () => {
    try {
      const projects = await axios.get(
        "https://63d7d9b1afbba6b7c945d817.mockapi.io/api/v1/test1"
      );
      const data = projects.data;
      console.log(data);
      return data;
    } catch (err) {
      const error = err as AxiosError;
      return error;
    }
  }
);

const ProjectSlice = createSlice({
    name: "ProjectSlice",
    initialState,
    reducers: {

    },
    extraReducers: (build)=> {
        build.addCase(
            fetchAllProjects.fulfilled,
            (state, action: PayloadAction<ProjectType[] | AxiosError>)=>{
                if(action.payload && "message" in action.payload){
                    return state
                } else if (!action.payload){
                    return state
                }
                return action.payload;
            }
        )
    }
})

export const projectReducer = ProjectSlice.reducer;
