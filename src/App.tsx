import { Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Layout } from "./common/Layout";
import { Task } from "./components/Task";
import { TodoForm } from "./components/TodoForm";
import { sampleTaskData } from "./data/SampleData";

const App = () => {
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
        <Grid xs={12} sm={6} item>
          <Typography variant="h4">To-do</Typography>
          <TodoForm />
        </Grid>
        <Grid xs={12} sm={6} item maxHeight={"50vh"} overflow="auto">
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

export default App;
