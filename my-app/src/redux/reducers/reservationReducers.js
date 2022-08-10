import {
  RESERVATION_CREATE_REQUEST,
  RESERVATION_CREATE_SUCCESS,
  RESERVATION_CREATE_FAIL,
  RESERVATION_LIST_REQUEST,
  RESERVATION_LIST_SUCCESS,
  RESERVATION_LIST_FAIL,
} from "../constants/reservationConstants.js";

export const reservationCreatReducer = (state = {}, action) => {
  switch (action.type) {
    case RESERVATION_CREATE_REQUEST:
      return { loading: true };
    case RESERVATION_CREATE_SUCCESS:
      return { loading: false, reservationInfo: action.payload };
    case RESERVATION_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const reservationsListReducer = (
  state = { reservation: [] },
  action
) => {
  switch (action.type) {
    case RESERVATION_LIST_REQUEST:
      return { loading: true };
    case RESERVATION_LIST_SUCCESS:
      return { loading: false, reservations: action.payload };
    case RESERVATION_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
