import React, { Component } from 'react';
import { connect } from "react-redux";
import BoxScore from './BoxScore';
import Question from './Question';
import { Result } from './interfaces';
import { withRouter } from 'react-router';

class QuizTemplate extends React.Component<any> {
  render() {
    let { questions, currentQuestion } = this.props;
    let question = questions[currentQuestion];
    return (
      <div>
        {question ? (
          <>
            <Question question={question} currentQuestion={currentQuestion} 
                questions={questions} />
            <BoxScore
              current={currentQuestion}
              questionsLength={questions.length}
            />
          </>
        ) : (
          <p>Questions are currently not available!</p>
        )}
      </div>
    );
  }
}

interface StateFromProps {
    currentQuestion: number;
    questions: Result[];
}


const mapStateToProps = (state: any) => ({
  currentQuestion: state.quizReducer.currentQuestion,
  questions: state.quizReducer.questions
});

export default connect(mapStateToProps)(QuizTemplate);