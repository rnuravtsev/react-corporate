import React from 'react';
import './Card.css';
import Answers from "../Answers/Answers";
import {TQuestion} from "../../types";

interface ICardProps {
  questions: TQuestion[],
}

export const Card: React.FC<ICardProps> = ({questions}) => {
  return (
    <div className="card">
      <div className="card__number">1/8</div>
      <h3 className="card__title">
        {questions[0].title}
      </h3>
      <div className="card__answers">
        <Answers questions={questions} />
      </div>
      <button className="card__button" type="button">Дальше</button>
    </div>
  );
};
