import React, {useState} from 'react';
import './Answers.css';
import { TQuestion } from "../../types";
import AnswersItem from "../AnswersItem/AnswersItem";
import classNames from "classnames";

interface IAnswersProps {
  questions: TQuestion[],
}

const Answers: React.FC<IAnswersProps> = ({questions}) => {
  return (
    <ul className={classNames("answers")}>
      {questions.map((el) => {
        const {id, answers} = el;
        return answers.map((answer) => {
          const { text, isCorrect, hint, percent } = answer;
          return <AnswersItem key={id} text={text} isCorrect={isCorrect} hint={hint} percent={percent}/>;
        });
      })}
    </ul>
  );
};

export default Answers;
