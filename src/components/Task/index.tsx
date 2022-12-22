import React from "react";
import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { TaskInterface } from "../../interfaces";
import { DoneAllOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { completeTodo, removeTodo, unCompleteTodo } from "../../redux";

interface Props {
  task: TaskInterface;
}

export const Task: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemove = (id: string | undefined) => {
    if (!id) return;
    dispatch(removeTodo(id));
  };

  const handleComplete = (id: string | undefined) => {
    if (!id) return;
    dispatch(completeTodo(id));
  };

  const handleUnComplete = (id: string | undefined) => {
    if (!id) return;
    dispatch(unCompleteTodo(id));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {task.title} <br />
          <Badge color="primary">
            <DoneAllOutlined color={task.done ? "success" : "warning"} />
          </Badge>
        </Typography>
        <Typography variant="body1" color={"secondary"}>
          {task.description}
        </Typography>
      </CardContent>
      <CardActions>
        {!task.done ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleComplete(task.id)}
          >
            Done
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleUnComplete(task.id)}
          >
            Pending
          </Button>
        )}
        <Button
          variant="contained"
          color="error"
          onClick={() => handleRemove(task.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
