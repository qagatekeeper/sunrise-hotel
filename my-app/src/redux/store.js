import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  reservationCreatReducer,
  reservationsListReducer,
} from "./reducers/reservationReducers.js";
import { userLoginReducer } from "./reducers/userReducers.js";

const reducer = combineReducers({
  reservationCreate: reservationCreatReducer,
  reservationsList: reservationsListReducer,
  userLogin: userLoginReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
