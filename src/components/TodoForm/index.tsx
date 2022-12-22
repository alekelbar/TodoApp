import { Button, TextField, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { FormikHelpers, FormikValues, useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { SnackError } from "../SnackError";
import { TaskInterface } from "../../interfaces/Task/task.interface";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux";
import { v4 as uuidv4 } from "uuid";

const initialValues: TaskInterface = {
  title: "",
  description: "",
};
const validationSchema = yup.object({
  title: yup
    .string()
    .min(5, "Min 5 characters for the title field")
    .required("Title it's a required field"),
  description: yup
    .string()
    .min(10, "Min 10 characters for the description field")
    .required("Description it's a required field"),
});

export const TodoForm: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (
    values: FormikValues,
    { resetForm }: FormikHelpers<TaskInterface>
  ) => {
    const { title, description } = values;
    dispatch(addTodo({ title, description, done: false, id: uuidv4() }));
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Box component={"form"} onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            color="success"
            fullWidth
            label="Task title"
            autoComplete="off"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color="success"
            fullWidth
            label="Task Description"
            autoComplete="off"
            minRows={8}
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
        </Grid>
        <Grid item xs={12} sx={{ height: { xs: "auto", sm: "150px" } }}>
          <Button type="submit" fullWidth variant="contained">
            Add Task
          </Button>
          {formik.touched.title && formik.errors.title ? (
            <SnackError msg={formik.errors.title} />
          ) : null}

          {formik.touched.description && formik.errors.description ? (
            <SnackError msg={formik.errors.description} />
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};
