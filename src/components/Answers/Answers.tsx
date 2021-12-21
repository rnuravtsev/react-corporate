import React from 'react';
import './Answers.css';
import {TAnswer} from "../../types";
import AnswersItem from "../AnswersItem/AnswersItem";
import classNames from "classnames";

interface IAnswersProps {
  answers: TAnswer[] | undefined;
}

const Answers: React.FC<IAnswersProps> = ({answers}) => {

  return (
   <ul className={classNames("answers")}>
     {answers?.map(answer => {
       const { id, text, isCorrect, comment, percent } = answer;
       return <AnswersItem key={id} id={id} text={text} isCorrect={isCorrect} comment={comment} percent={percent} />;
     })}
   </ul>
  );
};

export default Answers;
