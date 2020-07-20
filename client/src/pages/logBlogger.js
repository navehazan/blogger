import React, { useState } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { addBlogger } from "../actions/bloggers";
import Button from "../components/button";
import styled from "styled-components";

const useStyles = makeStyles({
  topContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  interestsContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  title: {
    color: "gray",
  },
  fieldRoot: {
    width: "300px",
  },
  checkboxLabel: {
    width: "300px",
    margin: "0px",
  },
});

const LogBlogger = ({ addBlogger }) => {
  const initialState = {
    interests: {
      vpn1: false,
      vpn2: false,
      vpn3: false,
    },
    email: "",
    name: "",
  };
  const classes = useStyles();
  const [state, setState] = useState(initialState);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let interests = { ...state.interests, [name]: checked };

    setState({ ...state, interests });
  };

  const signUp = () => {
    addBlogger(state);
    setState(initialState);
  };

  return (
    <div className={classes.topContainer}>
      <TextField
        className={classes.fieldRoot}
        id="name"
        onChange={handleFieldChange}
        value={state.name}
        name="name"
        label="Full name"
      />
      <TextField
        className={classes.fieldRoot}
        id="email"
        value={state.email}
        onChange={handleFieldChange}
        name="email"
        label="Email"
      />
      <div className={classes.interestsContainer}>
        <div className={classes.title}>Pick Your Interests</div>
        <FormControlLabel
          className={classes.checkboxLabel}
          control={
            <Checkbox
              checked={state.interests.vpn1}
              onChange={handleCheckboxChange}
              name="vpn1"
              color="primary"
            />
          }
          label="Vpn1"
        />
        <FormControlLabel
          className={classes.checkboxLabel}
          control={
            <Checkbox
              checked={state.interests.vpn2}
              onChange={handleCheckboxChange}
              name="vpn2"
              color="primary"
            />
          }
          label="Vpn2"
        />
        <FormControlLabel
          className={classes.checkboxLabel}
          control={
            <Checkbox
              checked={state.interests.vpn3}
              onChange={handleCheckboxChange}
              name="vpn3"
              color="primary"
            />
          }
          label="Vpn3"
        />
      </div>

      <Button onClick={signUp} variant="contained" color="primary">
        Sign Up
      </Button>
    </div>
  );
};

export default connect(null, { addBlogger })(LogBlogger);
