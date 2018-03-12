import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Constants } from '../constants/AppConstants';
import { QuestionTile } from './QuestionTile';

export const QuizHeader = ({question}) => (
    <header className="App-header">
        {question.category}
    </header>
)

export const QuizFooter = ({index, length}) => (
    <footer className="App-footer">
        <p>{index} of {length}</p>
    </footer>
)

export class Quiz extends Component {

  constructor(props){
    super(props);
    this.state = {
        questions: [],
        answers: []  
    };
    this.onAnswer = this.onAnswer.bind(this);
  }

  updateState = (prop, value) => {
    this.setState({
      [prop]: value
    });
  }

  componentDidMount() {
    axios.get(Constants.url)
      .then((response) => {
        let list = response.data.results;
        this.updateState('questions', list);
      })
      .catch(err => {
        console.log(Constants.questionListLoadingErrorMsg);//TODO: have better error handling
      })
  }

  stateUpdateCallback = () => {
    if(this.state.answers.length === this.state.questions.length){
        this.props.history.push('/results', this.state)
    }   
  }

  onAnswer = (value) => {
    this.setState((prevState, props) => ({
        answers: [...prevState.answers, value]
    }), this.stateUpdateCallback);
  };
  
  render() {
    const questions = this.state.questions,
        questionsLength = this.state.questions.length,
        answersLength = this.state.answers.length,
        onAnswer = this.onAnswer.bind(this);

    const RenderElem = () => {
        if(questionsLength){
            let index = answersLength ? Math.min(answersLength, questionsLength - 1 ) : 0,
                question = questions[ index ];

            return ( 
                <section className="App">
                    <QuizHeader question={question} />
                    <main className="App-main">
                        <QuestionTile question={question} onAnswer={onAnswer} />
                    </main>
                    <QuizFooter index={index+1} length={questionsLength} />
                </section>
            );
        }else{
            return <div>Loading...</div>; //TODO: Create a generic Loading element for entire application
        }
    };

    return (
        <RenderElem />
    );
  }
}
