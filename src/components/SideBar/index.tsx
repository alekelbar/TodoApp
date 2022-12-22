import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Theme,
} from "@mui/material";
import React from "react";
import { sampleTaskData } from "../../data/SampleData";
import { Task } from "../Task";
import { CloseOutlined } from "@mui/icons-material";

interface Props {
  open: boolean;
  onOpen: () => void;
}

export const SideBar: React.FC<Props> = ({ onOpen, open }) => {
  return (
    <Drawer
      anchor="left"
      variant="temporary"
      open={open}
      sx={{ Width: 240, overflow: "auto" }}
    >
      <Button
        fullWidth
        variant="contained"
        onClick={onOpen}
        sx={{
          ":hover": {
            backgroundColor: (theme: Theme) => theme.palette.primary.dark,
          },
        }}
      >
        <CloseOutlined />
      </Button>
      <List>
        {sampleTaskData.map((e) => (
          <ListItem key={e.title}>
            <Task task={e} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
