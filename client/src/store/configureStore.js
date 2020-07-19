import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bloggersReducer from "../reducers/bloggers";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({ bloggers: bloggersReducer });
const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, { bloggers: [] }, applyMiddleware(thunk));
const persistor = persistStore(store);

export default () => ({
  persistor,
  store,
});
