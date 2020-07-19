import { createReducer } from "@reduxjs/toolkit";
import { ADD_BLOGGER } from "../actions/bloggers";

const counterReducer = createReducer([], {
  [ADD_BLOGGER]: (state, action) => [...state, action.payload],
});
export default counterReducer;
