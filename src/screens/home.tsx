import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { Link } from 'react-router-dom';
import "./screens.css"
import { getAllQuestions } from "../redux/reducers/quizReducer";

class Home extends React.Component<DispatchFromProps> {
  componentDidMount() {
    this.props.getAllQuestions();
  }
  render() {
    return (
      <div className="screen">
        <h1>Hello my friend!</h1>
        <h1>Welcome to the Trivia Challenge!</h1>
        <h2>You will be presented with 10 True or False questions.</h2>
        <h2>Can you score 100%?</h2>
        <Button type="primary">
          <Link to="/quiz">Home</Link>
        </Button>
      </div>
    );
  }
};

interface StateFromProps {
}

interface DispatchFromProps {
    getAllQuestions: any
}

const mapStateToProps = (dispatch: any) => ({
});
const mapDispatchToProps = (dispatch: any) => ({
  getAllQuestions: () => dispatch(getAllQuestions)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
