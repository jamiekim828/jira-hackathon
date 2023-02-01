import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { useState } from "react";

import { useAppDispatch } from "../hooks/reduxHook";
import { Task } from "../types/ProjectTypes";

let task: Task[] = [
  {
    name: "name 2",
    description: "description 2",
    doerId: [],
    comments: [
      "a new manager was given the task of developing the club's talent",
    ],
    createdAt: "2023-01-31T01:48:02.505Z",
    dueDate: "dueDate 2",
    status: ["inProgress"],
    id: "2",
    projectId: "2",
  },
  {
    name: "name 28",
    description: "description 28",
    doerId: [],
    comments: [],
    createdAt: "2023-01-31T02:45:11.267Z",
    dueDate: "dueDate 28",
    status: ["created"],
    id: "28",
    projectId: "2",
  },
  {
    name: "name 28",
    description: "description 28",
    doerId: [],
    comments: [],
    createdAt: "2023-01-31T02:45:11.267Z",
    dueDate: "dueDate 28",
    status: ["created"],
    id: "281",
    projectId: "2",
  },
  {
    name: "name 28",
    description: "description 28",
    doerId: [],
    comments: [],
    createdAt: "2023-01-31T02:45:11.267Z",
    dueDate: "dueDate 28",
    status: ["finished"],
    id: "218",
    projectId: "2",
  },
  {
    name: "name 28",
    description: "description 28",
    doerId: [],
    comments: [],
    createdAt: "2023-01-31T02:45:11.267Z",
    dueDate: "dueDate 28",
    status: ["finished"],
    id: "238",
    projectId: "2",
  },
];

const TaskItem = ({ task }: any) => {
  // const dispatch = useAppDispatch();
  // get the list of users By Id;
  const users = ["John", "Elsa", "Thang"]; // dummy data
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const handleDelete = (id: string) => {
    console.log("delete", id);
  };
  const handleEdit = (id: string) => {
    console.log("edit");
  };

  return (
    <ListItem>
      <Card sx={{ hight: "600px", width: "100%" }}>
        <CardContent>
          <Box style={{ textAlign: "right" }}>
            <IconButton
              sx={{ color: "#034568" }}
              onClick={() => handleEdit(task.id)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              sx={{ color: "grey", borderRadius: "50%" }}
              onClick={() => handleDelete(task.id)}
            >
              <DeleteForeverIcon />
            </IconButton>
          </Box>
          <div>
            <Typography variant="h5" component="h2">
              {task.name}
            </Typography>
          </div>

          <Typography color="textSecondary">{task.dueDate}</Typography>
          <Box
            onClick={toggleExpansion}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              height: isExpanded ? "1.5rem" : "100px",
              cursor: "pointer",
            }}
          >
            {task.comments[0]}
          </Box>
          <Box sx={{ display: "flex", alignContent: "space-between" }}>
            <div>
              <IconButton
                sx={{ color: "grey" }}
                // onClick={() => addNewTask()}
              >
                <PersonAddAlt1Icon />
              </IconButton>
            </div>
            <div style={{ marginLeft: "auto" }}>
              {users.length > 0 &&
                users.map((user) => (
                  <IconButton
                    sx={{
                      color: "white",
                      fontSize: "1rem",
                      marginLeft: "0.2rem",
                      background: "#034568",
                      "&:hover": {
                        background: "#02334d",
                      },
                    }}
                    // onClick={() => handleUser(user.id)}
                  >
                    {user.slice(0, 2).toUpperCase()}
                  </IconButton>
                ))}
            </div>
          </Box>
        </CardContent>
      </Card>
    </ListItem>
  );
};

type BoxPropType = {
  array: Task[];
  text: string;
};

const BoxWithFilteredCards = ({ array, text }: BoxPropType) => {
  return (
    <Box
      sx={{
        backgroundColor: "#dde0e2",
        borderRadius: "0.5rem",
        padding: "1rem 0.3rem",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        fontSize="1.5rem"
        color="#003049"
        textAlign="center"
      >
        {text}
      </Typography>
      <List>
        {array.length > 0 &&
          array.map((task: { id: any }) => (
            <TaskItem key={task.id} task={task} />
          ))}
      </List>
      <div>
        <IconButton
          sx={{
            marginTop: "1rem",
            cursor: "pointer",
          }}
          // onClick={() => addNewTask()}
        >
          <AddCircleOutlineIcon
            sx={{
              color: "white",
              fontSize: "2rem",
            }}
          />
        </IconButton>
      </div>
    </Box>
  );
};

export default function TasksList() {
  let tasks = task;
  const filterTasks = (arr: Task[], filterText: string) => {
    return arr.filter((el) => el.status[0] === filterText) || [];
  };
  const notStartedTasks = filterTasks(tasks, "created");
  const inProgressTasks = filterTasks(tasks, "inProgress");
  const finishedTasks = filterTasks(tasks, "finished");

  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={4}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BoxWithFilteredCards array={notStartedTasks} text="TO DO" />
      </Grid>
      <Grid
        item
        xs={4}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BoxWithFilteredCards array={inProgressTasks} text="IN PROGRESS" />
      </Grid>
      <Grid
        item
        xs={4}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BoxWithFilteredCards array={finishedTasks} text=" FINISHED" />
      </Grid>
    </Grid>
  );
}
