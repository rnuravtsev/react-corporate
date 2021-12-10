import React from 'react';
import classNames from 'classnames';

interface IAnswersItem {
  text: string,
  isCorrect?: boolean,
  hint: string,
  percent: number,
}


const AnswersItem: React.FC<IAnswersItem> = ({isCorrect, text, hint, percent})  => {
  return (
    // TODO: Проблемное место, накидал на скорую руку, просто чтобы было
    <li className={classNames("answers__item",{"": isCorrect === null || undefined}, {"answers__item_correct": isCorrect}, {"answers__item_wrong": !isCorrect})}>
      <button className="answers__button" type="button">{text}</button>
      <div className="answers__info">
        <span className="answers__percentage">{percent}%</span>
        <span className="answers__hint">{hint}</span>
      </div>
    </li>

  );
};

export default AnswersItem;
