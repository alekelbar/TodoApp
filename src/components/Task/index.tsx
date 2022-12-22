import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { TaskInterface } from "../../interfaces";

interface Props {
  task: TaskInterface;
}

export const Task: React.FC<Props> = ({ task }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
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
