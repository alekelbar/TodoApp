import React from "react";
import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { TaskInterface } from "../../interfaces";
import { DoneAllOutlined } from "@mui/icons-material";

interface Props {
  task: TaskInterface;
}

export const Task: React.FC<Props> = ({ task }) => {
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
        <Button variant="contained" color="secondary">
          Done
        </Button>
        <Button variant="contained" color="warning">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
