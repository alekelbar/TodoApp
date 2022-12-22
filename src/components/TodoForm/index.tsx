import { Button, TextField, Grid, Snackbar, Alert } from "@mui/material";
import { Box } from "@mui/system";
import { FormikValues, useFormik } from "formik";
import React from "react";
import * as yup from "yup";

export const TodoForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values: FormikValues) => {
      console.log(values);
    },
    validationSchema: yup.object({
      title: yup
        .string()
        .required("Title it's a required field")
        .min(5, "Min 5 characters for the title field"),
      description: yup
        .string()
        .required("Description it's a required field")
        .min(10, "Min 10 characters for the description field"),
    }),
  });

  const handleErrors = (msg: string) => {
    return (
      <Snackbar open={true} autoHideDuration={3000}>
        <Alert severity="warning" sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    );
  };

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
          {formik.touched.title && formik.errors.title
            ? handleErrors(formik.errors.title)
            : null}

          {formik.touched.description && formik.errors.description
            ? handleErrors(formik.errors.description)
            : null}
        </Grid>
      </Grid>
    </Box>
  );
};
