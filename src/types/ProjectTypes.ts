export interface Project {
  createdAt: string;
  projectName: string;
  task: Task[];
  creator: string;
  projectType: string[];
  releaseDate: string;
  id: string;
}

export interface Task {
  name: string;
  description: string;
  doerId: number;
  comments: any[];
  createdAt: string;
  dueDate: string;
  id: string;
  projectId: string;
}
