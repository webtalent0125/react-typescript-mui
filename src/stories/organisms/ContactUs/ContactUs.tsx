import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import homeStyles from "../../../theme/homeStyles";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log({ email, firstName, subject, message });
  };

  return (
    <Box sx={homeStyles.formContainer}>
      <Typography variant="h4" sx={homeStyles.formHeading}>
        Contact Us
      </Typography>
      <Box sx={homeStyles.form} component="form" noValidate autoComplete="off">
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          sx={homeStyles.inputField}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={homeStyles.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
          sx={homeStyles.inputField}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <TextareaAutosize
          aria-label="minimum height"
          minRows={6}
          placeholder="Enter a message"
          style={homeStyles.textArea}
          spellCheck
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          variant="contained"
          type="submit"
          color="primary"
          sx={{ width: "200px", fontSize: "16px" }}
          onClick={submitForm}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
