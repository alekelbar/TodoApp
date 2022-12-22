import { Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Provider } from "react-redux";
import { Layout } from "./common/Layout";
import { Task } from "./components/Task";
import { TodoForm } from "./components/TodoForm";
import { sampleTaskData } from "./data/SampleData";
import { Home } from "./pages/Home";
import { store } from "./redux";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
