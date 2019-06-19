import { types } from "../Actions/types";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_POST:
      return action.posts;
    default:
      return state;
  }
}
