import { TaskType } from "./TaskType"
export interface ProjectType {
    id: number
    projectName: string
    creator: string
    //members: string[]
    task: TaskType[]
    description: string
}