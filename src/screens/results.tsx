import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { render } from "react-dom";
import { QuizResult } from "../components/interfaces";
import { resetQuiz } from "../redux/reducers/quizReducer";
class Results extends React.Component<ResultPageProps> {
  renderResult(result: QuizResult){
    if(result.correct){
      return (
        <>
          <FaPlus />
          <div
            dangerouslySetInnerHTML={{
              __html: result.question
            }}
            >
          </div>
        </>
      );
    } else {
      return (
        <>
          <FaMinus />
          <div
            dangerouslySetInnerHTML={{
              __html: result.question
            }}
          ></div>
        </>
      );
    }
  }
  render() {
    let { points, quizResults } = this.props;
    return (
      <div>
        <h1>You scored</h1>
        <h1>{points}/10</h1>
        <ul>
          {quizResults.map((result, index) => (
            <div key={index}>
              <>{this.renderResult(result)}</>
            </div>
          ))}
        </ul>
        <Button type="primary">
          <Link to="/" onClick={() => this.props.resetQuiz()}>
            PLAY AGAIN?
          </Link>
        </Button>
      </div>
    );
  }
};

interface StateFromProps {
  points: number;
  quizResults: QuizResult[];
}

interface DisptachFromProps {
  resetQuiz: any
}

type ResultPageProps = StateFromProps & DisptachFromProps;

const mapStateToProps = (state: any) => ({
  points: state.quizReducer.points,
  quizResults: state.quizReducer.quizResults
});

const mapDispatchToProps = (dispatch: any) => ({
  resetQuiz: () => dispatch(resetQuiz())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
