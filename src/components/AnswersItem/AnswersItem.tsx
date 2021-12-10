import React, { useState } from 'react';
import '../../images/checkmark.svg';
import '../../images/cross.svg';
import classNames from 'classnames';

interface IAnswersItem {
  text: string,
  isCorrect: boolean,
  hint: string,
  percent: number,
}


const AnswersItem: React.FC<IAnswersItem> = ({isCorrect, text, hint, percent})  => {
  const [selected, setSelected] = useState(false);
  const onButtonClick = () => {
    setSelected(true);
  };
  return (
    <li className={classNames("answers__item", {"answers__item_correct": selected && isCorrect}, {"answers__item_wrong": selected && !isCorrect})}>
      {selected && (
        <span className="answers__percentage">
          {percent}%
        </span>
      )}
      <button className={"answers__button"} type="button" onClick={onButtonClick}>{text}</button>
      {selected && (
        <div className="answers__info">
          <span className="answers__hint">{hint}</span>
        </div>
      )}
    </li>

  );
};

export default AnswersItem;
