import "isomorphic-fetch";

import { loadQuestions } from "../../services/questionService";
import { QuizResult } from "../../components/interfaces";
import { QuizTypes } from "./types";
export const ACTION_TYPES = {
  FETCH_QUESTIONS: "FETCH_QUESTIONS",
  ANSWER_QUESTION: "ANSWER_QUESTION",
  SET_CURRENT: "SET_CURRENT",
  UPDATE_POINTS: "UPDATE_POINTS",
  RESET_QUIZ: "RESET_QUIZ"
};

const initialState = {
  loading: true,
  currentQuestion: 0,
  points: 0,
  questions: [],
  quizResults: []
};

export const getAllQuestions = async (dispatch: any): Promise<QuizTypes> =>
  dispatch({
    type: ACTION_TYPES.FETCH_QUESTIONS,
    questions: await loadQuestions()
  });

export const answerQuestion = (question: string, correct: boolean): QuizTypes => ({
  type: ACTION_TYPES.ANSWER_QUESTION,
  quizResult: {
    question: question,
    correct: correct
  }
});

export const setCurrent = (): QuizTypes => ({
  type: ACTION_TYPES.SET_CURRENT
});

export const updatePoints = (): QuizTypes => ({
  type: ACTION_TYPES.UPDATE_POINTS
});

export const resetQuiz = () => ({
  type: ACTION_TYPES.RESET_QUIZ
});

export const quizReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_QUESTIONS:
      console.log(action)
      return {
        ...state,
        loading: false,
        currentQuestion: 0,
        questions: action.questions.results
      };
    case ACTION_TYPES.ANSWER_QUESTION:
      return {
        ...state,
        quizResults: [...state.quizResults, action.quizResult]
      };
    case ACTION_TYPES.UPDATE_POINTS:
      return {
        ...state,
        points: state.points + 1
      };
    case ACTION_TYPES.SET_CURRENT:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      };
    case ACTION_TYPES.RESET_QUIZ:
      return {
        ...state,
        loading: true,
        currentQuestion: 0,
        points: 0,
        questions: [],
        quizResults: []
      };
    default:
      return state;
  }
};
