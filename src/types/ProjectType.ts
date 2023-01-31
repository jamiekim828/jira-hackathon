import { TaskType } from "./TaskType"
export interface ProjectType {
    id: number
    name: string
    creator: string
    members: string[]
    tasks: TaskType[]
    description: string
}