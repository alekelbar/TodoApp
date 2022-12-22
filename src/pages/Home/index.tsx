import { Layout } from "../../common/Layout";
import { Grid, Typography, Alert } from "@mui/material";
import { TodoForm } from "../../components/TodoForm";
import { Task } from "../../components/Task";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/hooks/hooks.redux";
import { Box } from "@mui/system";
import { setItem } from "../../helpers/SetItem";

export const Home = () => {
  const data = useSelector((state: RootState) => state.todoReducer);
  const toString = JSON.stringify(data, null, 3);
  setItem(toString);

  return (
    <Layout>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems="center"
        maxWidth="850px"
        height={"450px"}
        spacing={2}
        m={2}
      >
        <Grid xs={12} sm={5} item>
          <Typography variant="h4">To-do</Typography>
          <TodoForm />
        </Grid>
        <Grid
          xs={12}
          sm={7}
          item
          sx={{ maxHeight: { sm: "450px", xs: "250px" } }}
          overflow="auto"
        >
          <Grid
            container
            justifyContent={"center"}
            alignItems="center"
            spacing={"1em"}
          >
            {data
              .filter((e) => !e.done)
              .map((e) => (
                <Grid xs={12} key={e.title} item>
                  <Task task={e} />
                </Grid>
              ))}
          </Grid>
          <Box m={"0 auto"}>
            {!data.filter((e) => !e.done).length && (
              <Alert
                variant="outlined"
                sx={{ width: "100%", mt: 2 }}
                severity="info"
              >
                No data found
              </Alert>
            )}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};
