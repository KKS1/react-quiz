import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { isArray } from '../utilities/utils';
import { ResultsList } from './ResultsList';

export const getQuizResults = (questions, answers) => {
  let score = 0,
    isCorrect;

  let resultsMap = answers.map( (answer, index) => {
    isCorrect = false;

    if(answer === questions[index].correct_answer) {
      isCorrect = true;
      score++;
    }

    return (
      { 
        question: questions[index].question, 
        correct: isCorrect 
      }
    );
  });

  return {resultsMap, score};
}

export const Results  = (props) => {
  let { questions, answers } = props.location.state;

  if( !isArray(questions) || !isArray(answers) ){ //we can use lodash _.isArray here too
    return (
      <Redirect to="/" />
    )
  }

 let { resultsMap, score } = getQuizResults(questions, answers);

  return (
      <section className="App">
        <header className="App-header Results-header">
            You scored {score} / {questions.length}
        </header>
        <main className="App-main">
          <ResultsList results={resultsMap} />
        </main>
        <footer className="App-footer">
          <Link to="/">Play Again?</Link>
        </footer>
      </section> 
  );
}
