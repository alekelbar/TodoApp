import { Button, TextField, Grid, Snackbar, Alert } from "@mui/material";
import { Box } from "@mui/system";
import { FormikHelpers, FormikValues, useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { SnackError } from "../SnackError";
import { TaskInterface } from "../../interfaces/Task/task.interface";

const initialValues: TaskInterface = {
  title: "",
  description: "",
};

const onSubmit = (
  values: FormikValues,
  { resetForm }: FormikHelpers<TaskInterface>
) => {
  console.log(values);
  resetForm();
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

const onReset = (values: any) => {
  console.log("reset called");
};

export const TodoForm: React.FC = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    onReset,
  });

  return (
    <Box component={"form"} onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            fullWidth
            label="Task title"
            autoComplete="off"
            minRows={12}
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            fullWidth
            label="Task Description"
            autoComplete="off"
            minRows={12}
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
        </Grid>
        <Grid item xs={12}>
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
