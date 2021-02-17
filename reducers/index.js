import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";
import skill from "./skill";
import chat from "./chat";

// const rootReducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case HYDRATE:
//         return action.payload;
//       default:
//         return state;
//     }
//   },
//   user,
//   post,
//   skill,
// });

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        user,
        post,
        skill,
        chat,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
