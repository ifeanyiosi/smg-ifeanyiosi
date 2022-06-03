import React from "react";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectField = ({ name, options, ...otherProps }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configurations = {
    ...field,
    select: true,
    ...otherProps,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configurations.error = true;
    configurations.helperText = meta.error;
  }

  return (
    <TextField {...configurations}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectField;
