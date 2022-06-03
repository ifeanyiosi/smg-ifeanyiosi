import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const TextFieldWrapper = ({ children, ...otherProps }) => {
  const { submitForm, resetForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
    setTimeout(() => {
      resetForm();
    }, 1500);
  };

  const configurations = {
    ...otherProps,
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...configurations}>{children}</Button>;
};

export default TextFieldWrapper;
