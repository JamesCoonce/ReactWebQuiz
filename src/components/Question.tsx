import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { answerQuestion, setCurrent, updatePoints } from '../redux/reducers/quizReducer';
import { Result, QuizResult } from "./interfaces";
import { withRouter } from "react-router-dom";

class Question extends React.Component<QuestionProps> {
  chooseAnswer(choice: String) {
    const {
      setCurrent,
      answerQuestion,
      updatePoints,
      currentQuestion,
      questions
    } = this.props;
    let answer = questions[currentQuestion].correct_answer;
    if (choice === answer) {
      answerQuestion(questions[currentQuestion].question, true);
      updatePoints();
    } else {
      answerQuestion(questions[currentQuestion].question, false);
    }
    setCurrent();
    if (currentQuestion >= questions.length - 1) {
      this.props.history.push("/results");
    }
  }
  render() {
    let { question } = this.props;
    return (
      <div className="well">
        <h3>
          {question.category}
        </h3>
        <h3>
          <div
            dangerouslySetInnerHTML={{
              __html: question.question
            }}
          ></div>
        </h3>
        <hr />
        <ul className="list-group">
          <Button type="primary" onClick={() => this.chooseAnswer("True")}>
            True
          </Button>
          <Button type="primary" onClick={() => this.chooseAnswer("False")}>
            False
          </Button>
        </ul>
      </div>
    );
  }
}

interface StateFromProps {
  currentQuestion: number;
  questions: Result[];
}

interface DispatchFromProps {
    answerQuestion(question: string, correct: boolean): any,
    setCurrent: any,
    updatePoints: any
}

interface Props {
    question: Result,
    history: any
}

type QuestionProps = StateFromProps & DispatchFromProps & Props

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
  answerQuestion: (question: string, correct: boolean) => dispatch(answerQuestion(question, correct)),
  setCurrent: () => dispatch(setCurrent()),
  updatePoints: () => dispatch(updatePoints())
});

export default withRouter<any, any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Question)
);