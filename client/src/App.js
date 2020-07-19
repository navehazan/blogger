import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import styled from "styled-components";

import ShareTask from "./pages/shareTask";
import LogBlogger from "./pages/logBlogger";
import SelectBlogger from "./pages/selectBlogger";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <NavBarButton
            variant="contained"
            component={RouterLink}
            to="/log-blogger"
          >
            Log Blogger
          </NavBarButton>
          <NavBarButton
            variant="contained"
            component={RouterLink}
            to="/share-task"
          >
            Share Task
          </NavBarButton>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/log-blogger" component={LogBlogger} />
        <Route path="/share-task" component={ShareTask} />
        <Route path={"/select-blogger"} component={SelectBlogger} />
      </Switch>
    </Router>
  );
}

const NavBarButton = styled(Button)`
  text-decoration: none;
  margin: 10px;
`;

export default App;
