import React from 'react';
import './Card.css';
import {ICardProps} from "../../interfaces";
import {questions} from "../../configs/questions";

export const Card: React.FC<ICardProps> = (props) => {
  return (
    <div className="card">
      <div className='card_question'>
        {questions[0].question.text}
      </div>
      <ul className="card_answers-list">
        <li className="answers-list_item">
          <div className="answer-variant-lighter" />
          <button className="answers-list_button" type="button">1</button>
        </li>
        <li className="answers-list_item">
          <div className="answer-variant-lighter" />
          <button className="answers-list_button" type="button">2</button>
        </li>
        <li className="answers-list_item">
          <div className="answer-variant-lighter" />
          <button className="answers-list_button" type="button">3</button>
        </li>
      </ul>
      <button className="card_next-step-button" type="button">next</button>
    </div>
  );
};
