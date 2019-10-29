import React from 'react';
import { BoxScoreProp } from './interfaces';

const BoxScore = (props: BoxScoreProp) => {
    return (
      <div className="well">
        Question {props.current + 1} out of {props.questionsLength}
      </div>
    );
}

export default BoxScore;