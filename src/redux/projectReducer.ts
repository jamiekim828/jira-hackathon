import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { ProjectType } from '../types/ProjectType';

const initialState: ProjectType[] = [];

export const fetchAllProjects = createAsyncThunk(
  'fetchAllProjects',
  async () => {
    try {
      const projects = await axios.get(
        'https://63d7d9b1afbba6b7c945d817.mockapi.io/api/v1/test1'
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

export const deleteProject = createAsyncThunk(
  'deleteProject',
  async (projectId: number) => {
    try {
      console.log(projectId);
      const response = await axios.delete(
        `https://63d7d9b1afbba6b7c945d817.mockapi.io/api/v1/test1/${projectId}`
      );
      const data = response.data;
      return data;
    } catch (err) {
      const error = err as AxiosError;
      return error;
    }
  }
);

export const editProject = createAsyncThunk(
  'editProject',
  async (project: Partial<ProjectType>) => {
    try {
      const response = await axios.put(
        `https://63d7d9b1afbba6b7c945d817.mockapi.io/api/v1/test1/${project.id}`,
        {
          title: project.projectName,
          description: project.description,
        }
      );
      const data = response.data;
      return data;
    } catch (err) {
      const error = err as AxiosError;
      return error;
    }
  }
);

const ProjectSlice = createSlice({
  name: 'ProjectSlice',
  initialState,
  reducers: {
    deleteItem: (state: ProjectType[], action: any) => {
      if (action.payload) {
        return state.filter((item) => item.id !== action.payload);
      }
    },
  },
  extraReducers: (build) => {
    build
      .addCase(
        fetchAllProjects.fulfilled,
        (state, action: PayloadAction<ProjectType[] | AxiosError>) => {
          if (action.payload && 'message' in action.payload) {
            return state;
          } else if (!action.payload) {
            return state;
          }
          return action.payload;
        }
      )
      .addCase(
        editProject.fulfilled,
        (state, action: PayloadAction<ProjectType>) => {
          return state.map((item) => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          });
        }
      );
  },
});

// You can use useAppDispatch from reduxHook.ts inside hooks folder to dispatch the thunkApi
// and get the project list

export const projectReducer = ProjectSlice.reducer;
export const { deleteItem } = ProjectSlice.actions;
