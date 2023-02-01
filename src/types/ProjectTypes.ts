export interface Project {
  createdAt: string;
  projectName: string;
  task: Task[];
  creator: string;
  projectType: string[];
  releaseDate: string;
  id: string;
  status: StatusType;
}

export interface Task {
  name: string;
  description: string;
  doerId: string[]|number;
  comments: string[];
  createdAt: string;
  dueDate: string;
  id: string;
  projectId: string;
  status: StatusType;
}

type StatusType = ["created" | "inProgress" | "finished"];
