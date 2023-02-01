import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import { ProjectType } from "../types/ProjectType";

type InitialState ={
    projectDetail: ProjectType,
}
const initialState: InitialState = {
    projectDetail: {
        id: 0,
        projectName: "",
        creator: "",
        //members: string[]
        task: [],
        description: ""
    },
}

export default function fetchOneProject(projectId: string|undefined){
    const id = Number(projectId)
    return (dispatch: AppDispatch) => {
        fetch (`https://63d7d9b1afbba6b7c945d817.mockapi.io/api/v1/test1/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
        dispatch(detailActions.getDetailData(data))})
      } 
    }

const projectDetailSlice = createSlice({
    name: "projectdetail",
    initialState,
    reducers: {
        getDetailData: (state, action) =>{
            state.projectDetail = action.payload;
        }
    }
})
export const detailActions = projectDetailSlice.actions;
export const detailReducer = projectDetailSlice.reducer;
