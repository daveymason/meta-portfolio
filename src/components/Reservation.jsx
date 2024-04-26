import React, { useState } from "react";
import {
  Grid,
  Avatar,
  TextField,
  Button,
  Select,
  MenuItem,
  TextareaAutosize,
  FormControl,
  InputLabel,
  FormHelperText,
  Typography,
  createTheme,
    ThemeProvider,
} from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#485F57',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: '#fff',  // Ensures text is white for better readability
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label.Mui-focused': {
              color: '#485F57',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#485F57',
              },
            },
          },
        },
      },
    },
  });

const Reservation = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        email: '',
        numberOfPeople: '',
        message: '',
        dateTime: '', 
        touched: {
            firstName: false,
            email: false,
            message: false,
            numberOfPeople: false,
            dateTime: false  
        },
        validationMessages: {
            firstName: '',
            email: '',
            message: '',
            numberOfPeople: '',
            dateTime: ''  
        }
    });

  const validateNumberOfPeople = (value) => {
    if (value < 1 || value > 6) {
      return "Number of people must be between 1 and 6";
    }
    return "";
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    const touched = { ...formState.touched, [name]: true };
    let validationMessages = { ...formState.validationMessages };

    if (name === "numberOfPeople") {
      validationMessages.numberOfPeople = validateNumberOfPeople(
        parseInt(value, 10)
      );
    } else {
      validationMessages = {
        ...validationMessages,
        ...validateField(name, value),
      };
    }

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
      touched,
      validationMessages,
    }));
  };

  const validateField = (name, value) => {
    let message = "";
    switch (name) {
      case "firstName":
        message = value ? "" : "Required";
        break;
      case "email":
        message = /\S+@\S+\.\S+/.test(value) ? "" : (value ? "Invalid email address" : "Required");
        break;
      case "message":
        message = value.length >= 25 ? "" : "Must be at least 25 characters";
        break;
      case "dateTime":
        message = value ? "" : "Required";  // Simple presence check
        break;
      default:
        break;
    }
    return { [name]: message };
  };

  const isFormValid = () => {
    return (
      formState.firstName.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formState.email) &&
      formState.message.length >= 25 &&
      parseInt(formState.numberOfPeople, 10) >= 1 &&
      parseInt(formState.numberOfPeople, 10) <= 6 &&
      formState.dateTime !== ""  
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const allTouched = {
      firstName: true,
      email: true,
      message: true,
      numberOfPeople: true,
      dateTime: true,
    };

    setFormState((prevState) => ({
      ...prevState,
      touched: allTouched,
      validationMessages: {
        ...prevState.validationMessages,
        firstName: prevState.firstName ? "" : "Required",
        email: /\S+@\S+\.\S+/.test(prevState.email)
          ? ""
          : "Invalid email address",
        message:
          prevState.message.length >= 25
            ? ""
            : "Must be at least 25 characters",
      },
    }));

    if (isFormValid()) {
      alert(`Thanks for your submission, ${formState.firstName}!`);
      // Reset form state
      setFormState({
        firstName: "",
        email: "",
        message: "",
        numberOfPeople: "1",
        dateTime: "",
        touched: {},
        validationMessages: {},
      });
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const touched = { ...formState.touched, [name]: true };
    const validationMessages = validateField(name, formState[name]);

    setFormState((prevState) => ({
      ...prevState,
      touched,
      validationMessages: {
        ...prevState.validationMessages,
        ...validationMessages,
      },
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        style={{
          position: "relative",
          height: "90vh",
          backgroundColor: "#fff",
          alignItems: "center",
        }}
        id="contact"
      >
        <Grid item xs={1} sx={{ pl: 5, pt: 5 }} alignSelf={"flex-start"}>
          <Avatar src="/CFIcon.png" alt="logo" sx={{ width: 92, height: 92 }} />
        </Grid>
        <Grid item xs={5} sx={{ pt: 5 }}>
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              fontFamily: "Markazi Text, serif !important",
              color: "#485F57"
            }}
          >
            Book A Table
          </Typography>
        </Grid>

        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            <TextField
              label="First Name"
              type="text"
              id="firstName"
              name="firstName"
              value={formState.firstName}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={formState.touched.firstName && !formState.firstName}
              helperText={
                formState.touched.firstName && !formState.firstName
                  ? "Required"
                  : ""
              }
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Email Address"
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={
                formState.touched.email &&
                (!formState.email || !/\S+@\S+\.\S+/.test(formState.email))
              }
              helperText={
                formState.touched.email && !formState.email
                  ? "Required"
                  : formState.touched.email &&
                    formState.email &&
                    !/\S+@\S+\.\S+/.test(formState.email)
                  ? "Invalid email address"
                  : ""
              }
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <FormControl fullWidth margin="normal">
              <TextField
                label="Number of People"
                type="number"
                id="numberOfPeople"
                name="numberOfPeople"
                value={formState.numberOfPeople}
                onChange={handleFormChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  min: 1,
                  max: 6,
                  step: 1,
                }}
                variant="outlined"
              />
            </FormControl>

            <TextField
              label="Date and Time"
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={formState.dateTime}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={formState.touched.dateTime && !formState.dateTime}
              helperText={formState.touched.dateTime && !formState.dateTime ? "Required" : ""}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Your Message"
              multiline
              rows={4}
              id="message"
              name="message"
              value={formState.message}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={
                formState.touched.message &&
                (!formState.message || formState.message.length < 25)
              }
              helperText={
                formState.touched.message && !formState.message
                  ? "Required"
                  : formState.touched.message &&
                    formState.message &&
                    formState.message.length < 25
                  ? "Must be at least 25 characters"
                  : ""
              }
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              aria-label="Submit reservation form"
            >
              Submit <i className="fas fa-paper-plane"></i>
            </Button>
          </FormControl>
        </form>
      </Grid>
    </ThemeProvider>
  );
};

export default Reservation;
