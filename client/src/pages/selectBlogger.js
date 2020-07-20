import React, { useMemo, useState } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import columns from "../constants/columns";
import interestsToString from "../utils/interestsToString";
import { Checkbox } from "@material-ui/core";
import styled from "styled-components";
import Button from "../components/button";
import axios from "axios";
import getEmails from "../utils/getEmails";

const SelectBlogger = ({ bloggers }) => {
  const [state, setState] = useState([]);
  const bloggersToDisplay = useMemo(() => interestsToString(bloggers), [
    bloggers,
  ]);

  const sendEmail = async () => {
    const emails = getEmails(state, bloggers);
    try {
      await axios.post("http://localhost:3001/bloggers", emails);
      console.log(emails);
    } catch (e) {
      console.log(e);
    }
    setState([]);
  };

  const toggleBlogger = (rowData) => {
    const {
      tableData: { id },
    } = rowData;
    let selectedBloggers = [...state];
    if (selectedBloggers.includes(id)) {
      selectedBloggers = selectedBloggers.filter(
        (selectedBlogger) => selectedBlogger !== id
      );
    } else {
      selectedBloggers.push(id);
    }
    setState(selectedBloggers);
  };

  return (
    <Container>
      <MaterialTable
        title={"Active Bloggers"}
        options={{ sorting: true, search: false, filtering: true }}
        columns={columns}
        data={bloggersToDisplay}
        actions={[
          {
            icon: () => null,
            onClick: () => null,
          },
        ]}
        components={{
          Action: (props) => {
            return (
              <Checkbox
                checked={state.includes(props.data.tableData.id)}
                onChange={() => toggleBlogger(props.data)}
              />
            );
          },
        }}
      />
      <Button variant="contained" color="primary" onClick={sendEmail}>
        Share Task
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.yellow};
  .MuiPaper-root {
    width: 100%;
  }
`;

const mapStateToProps = (state) => ({
  bloggers: state.bloggers,
});

export default connect(mapStateToProps)(SelectBlogger);
