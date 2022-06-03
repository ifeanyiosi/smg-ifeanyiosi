import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../components/FormUI/Textfield/TextField";
import SelectField from "../components/FormUI/SelectComponent/SelectField";
import DateField from "../components/FormUI/DateSelector";
import ButtonComponent from "../components/FormUI/Button";
import titleOptions from "../components/FormUI/SelectComponent/titleOptions.json";
import genderOptions from "../components/FormUI/SelectComponent/genderOptions.json";
import countries from "../components/FormUI/SelectComponent/countries.json";
import axios from "axios";
import { idKey } from "../useFetch";
import { useNavigate } from "react-router-dom";



const AddUser = () => {
  const [errorResponse, setErrorResponse] = useState("");
  const [success, setSuccess] = useState("");
  const [animateError, setAnimateError] = useState(false);
  const [animateSuccess, setAnimateSuccess] = useState(false);

  const navigate = useNavigate();

  const createUser = (userValues) => {
    axios
      .post(
        "https://dummyapi.io/data/v1/user/create",
        {
          ...userValues,
        },
        {
          headers: {
            "app-id": idKey,
          },
        }
      )
      .then((response) => {
        console.log(response.status);
        setSuccess(response.status);
      })
      .catch((error) => {
        if (error.response) {
          const errorMessage = error.response.data.data;
          setErrorResponse(errorMessage[Object.keys(errorMessage).toString()]);
        }
      });
  };

  useEffect(() => {
    if (errorResponse !== "") {
      setAnimateError(!animateError);
      setTimeout(() => {
        setErrorResponse("");
        setAnimateError(false);
      }, 5000);
    }

    if (success === 200) {
      setAnimateSuccess(!animateSuccess);
      setTimeout(() => {
        setAnimateSuccess(false);
        navigate("/Created-Users");
        setSuccess("");
      }, 3000);
    }
  }, [success, errorResponse]);

  const INITIAL_FORM_STATE = {
    title: "",
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    dateOfBirth: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "",
    picture: "",
  };

  const VALIDATIONS = Yup.object().shape({
    title: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    phone: Yup.number()
      .integer("Invalid Email")
      .typeError("Please enter a valid phone number")
      .required("Required"),
    gender: Yup.string().required("Required"),
    dateOfBirth: Yup.date().required("Required"),
    picture: Yup.string(),
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  });

  const animateMessage = {
    right: "2rem",
    transition: "all 0.6s ease-in-out",
    zIndex: 1000,
  };

  return (
    <Layout>
      <div
        style={!animateError ? null : animateMessage}
        className="flex absolute -right-96 items-center justify-center p-8 h-max-content w-96 shadow-lg bg-red-500 text-white"
      >
        {errorResponse && <span>{errorResponse}</span>}
      </div>

      <div
        style={!animateSuccess ? null : animateMessage}
        className="flex absolute -right-96 items-center justify-center p-8 h-max-content w-96 shadow-lg bg-green-500 text-white"
      >
        {success === 200 && (
          <span className="text-lg font-bold">Form Submitted Successfully</span>
        )}
      </div>
      <Grid container>
        <Grid item xs={12}>
          <h1 className="text-slate-500 text-3xl text-center w-max-content font-bold ">
            Add User
          </h1>
        </Grid>
      </Grid>
      <Grid container mt={4}>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={VALIDATIONS}
          onSubmit={(values) => {
            const allValues = {
              title: values.title,
              firstName: values.firstName,
              lastName: values.lastName,
              gender: values.gender,
              email: values.email,
              dateOfBirth: values.dateOfBirth,
              phone: values.phone,
              location: {
                street: values.street,
                city: values.city,
                state: values.state,
                country: values.country,
              },
            };
            createUser(allValues);
          }}
        >
          <Form className="w-[70%] mx-auto">
            <Grid container direction="row" item xs={12}>
              <div className="flex flex-col gap-2 w-full mt-4">
                <span className="font-bold text-md">Title</span>
                <SelectField
                  name="title"
                  label="Title"
                  options={titleOptions}
                />
              </div>
              <div className="flex flex-col gap-2 w-full mt-4">
                <span className="font-bold text-md">First Name</span>
                <Textfield name="firstName" label="First Name" />
              </div>
              <div className="flex flex-col gap-2 w-full mt-4">
                <span className="font-bold text-md">Last Name</span>
                <Textfield name="lastName" label="Last Name" />
              </div>
              <div className="flex flex-col gap-2 w-full mt-4">
                <span className="font-bold text-md">Gender</span>
                <SelectField
                  name="gender"
                  label="Gender"
                  options={genderOptions}
                />
              </div>
              <div className="flex flex-col gap-2 w-full mt-4">
                <span className="font-bold text-md">Email Address</span>
                <Textfield name="email" label="Email Address" />
              </div>

              <div className="flex flex-col gap-2 w-full mt-4">
                <span className="font-bold text-md">Date Of Birth</span>
                <DateField name="dateOfBirth" label="Date of Births" />
              </div>

              <div className="flex flex-col gap-2 w-full mt-4">
                <span className="font-bold text-md">Phone</span>
                <Textfield name="phone" label="Phone Number" />
              </div>

              <div className="flex flex-col gap-2 w-full mt-4">
                <span className="font-bold text-md">Countries</span>
                <SelectField
                  name="country"
                  label="Country"
                  options={countries}
                />
              </div>

              <div className="flex flex-col gap-2 w-full mt-4">
                <span className="font-bold text-md">State</span>
                <Textfield name="state" label="State" />
              </div>

              <div className="flex flex-col gap-2 w-full mt-4">
                <span className="font-bold text-md">City</span>
                <Textfield name="city" label="City" />
              </div>

              <div className="flex flex-col gap-2 w-full mt-4">
                <span className="font-bold text-md">Street</span>
                <Textfield name="street" label="Street" />
              </div>

              <div className="flex flex-col gap-2 w-full mt-4">
              <span className="font-bold text-md">Picture</span>
                <Textfield name="picture" label="Picture URL" />
              </div>

              <div className="flex flex-col gap-2 w-full mt-4">
                <ButtonComponent variant="contained" sx={{ height: "3.5rem" }}>
                  Submit Form
                </ButtonComponent>
              </div>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Layout>
  );
};

export default AddUser;
