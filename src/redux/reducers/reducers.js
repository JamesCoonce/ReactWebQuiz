import { combineReducers } from "redux";
import { quizReducer } from './quizReducer';
const reducers = combineReducers({
  quizReducer: quizReducer
});

export default reducers;
