import React from "react";
import  Button  from "../components/button";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const ShareTask = () => {
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/select-blogger"
      >
        Share Task
      </Button>
    </Container>
  );
};



const Container = styled.div`
  display: flex;
  padding: 20px;
`;

export default ShareTask;
