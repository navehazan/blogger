import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import {  FormControlLabel, Checkbox } from "@material-ui/core";
import { addBlogger } from "../actions/bloggers";
import Button from "../components/button";

const LogBlogger = ({addBlogger}) => {
   const initialState =  {
    interests: {
      vpn1: false,
      vpn2: false,
      vpn3: false,
    },
    email: "",
    name: "",
  }
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

  const signUp = ()=> {
    addBlogger(state);
    setState(initialState);
  }

  return (
    <TopContainer>
      <FormField
        id="name"
        onChange={handleFieldChange}
        value={state.name}
        name="name"
        label="Full name"
      />
      <FormField
        id="email"
        value={state.email}
        onChange={handleFieldChange}
        name="email"
        label="Email"
      />
      <InterestsContainer>
        <Title>Pick Your Interests</Title>
        <CheckboxLbel
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
        <CheckboxLbel
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
        <CheckboxLbel
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
      </InterestsContainer>

      <Button onClick={signUp} variant="contained" color="primary">
        Sign Up
      </Button>
    </TopContainer>
  );
};

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const InterestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.div`
  color: gray;
`;

const FormField = styled(TextField)`
  width: 300px;
`;

const CheckboxLbel = styled(FormControlLabel)`
  width: 300px;
  margin: 0px;
`;

export default connect(null, { addBlogger })(LogBlogger);
