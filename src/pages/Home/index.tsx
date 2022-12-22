import React from "react";
import { Layout } from "../../common/Layout";
import { Grid, Typography } from "@mui/material";
import { TodoForm } from "../../components/TodoForm";
import { sampleTaskData } from "../../data";
import { Task } from "../../components/Task";

export const Home = () => {
  return (
    <Layout>
      <Grid
        container
        justifyContent={"center"}
        alignItems="center"
        maxWidth="md"
        spacing={1}
        m={2}
      >
        <Grid xs={12} sm={5} item>
          <Typography variant="h4">To-do</Typography>
          <TodoForm />
        </Grid>
        <Grid xs={12} sm={7} item maxHeight={"50vh"} overflow="auto">
          <Grid
            container
            justifyContent={"center"}
            alignItems="center"
            spacing={"1em"}
          >
            {sampleTaskData.map((e) => (
              <Grid xs={12} key={e.title} item>
                <Task task={e} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
