import React from "react";
import TextField from "@mui/material/TextField";
import { useField } from "formik";

const TextFieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configurations = {
    ...field,
    ...otherProps,
    variant: "outlined",
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configurations.error = true;
    configurations.helperText = meta.error;
  }

  return <TextField {...configurations} />;
};

export default TextFieldWrapper;
