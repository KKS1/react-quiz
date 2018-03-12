import React from 'react';
import * as _ from 'lodash';
import UserInputForm  from './UserInputForm';

export const QuestionTile = (props) => {
    const question = props.question,
        onAnswer = props.onAnswer;

    return  (
        <React.Fragment>
            <p>{_.unescape(question.question)}</p>
            <UserInputForm onAnswer={onAnswer} />
        </React.Fragment>    
    )
};