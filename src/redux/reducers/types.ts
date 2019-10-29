import { ACTION_TYPES } from './quizReducer';
import { QuizResult, QuestionResponse } from '../../components/interfaces';
interface GetAllQuestionsAction {
    type: typeof ACTION_TYPES.FETCH_QUESTIONS,
    questions: Promise<any>
}

interface AnswerQuestionAction {
    type: typeof ACTION_TYPES.ANSWER_QUESTION,
    quizResult: QuizResult
}

interface SetCurrentAction {
    type: typeof ACTION_TYPES.SET_CURRENT
}

interface UpdatePointsAction {
    type: typeof ACTION_TYPES.UPDATE_POINTS
}

interface ResetQuizAction {
    type: typeof ACTION_TYPES.RESET_QUIZ
}

export type QuizTypes =
  | GetAllQuestionsAction
  | AnswerQuestionAction
  | SetCurrentAction
  | UpdatePointsAction
  | ResetQuizAction;