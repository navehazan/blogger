import React from "react";
import  Button  from "../components/button";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container:{
    display: "flex",
    padding: "20px"
  }
})

const ShareTask = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/select-blogger"
      >
        Share Task
      </Button>
    </div>
  );
};

export default ShareTask;
