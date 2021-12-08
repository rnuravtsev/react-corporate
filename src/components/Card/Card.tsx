import React from 'react';
import './Card.css';
import {ICardProps} from "../../interfaces";
import {questions} from "../../configs/questions";

export const Card: React.FC<ICardProps> = (props) => {
  return (
    <div>
      <div>
        {questions[0].question.text}
      </div>
      <ul>
        <li>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
        </li>
      </ul>
      <button type="button">next</button>
    </div>
  );
};
