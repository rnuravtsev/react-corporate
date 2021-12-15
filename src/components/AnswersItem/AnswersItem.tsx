import React, { useState } from 'react';
import {ReactComponent as CheckmarkIcon} from '../../images/checkmark.svg';
import {ReactComponent as CrossIcon} from '../../images/cross.svg';
import classNames from 'classnames';
import {TAnswer} from "../../types";

const AnswersItem: React.FC<TAnswer> = ({id, isCorrect, text, comment, percent})  => {
  const [selected, setSelected] = useState(false);

  const onButtonClick = () => {
    setSelected(true);
  };

  return (
    <li className={classNames("answers__item", {"answers__item_correct": selected && isCorrect}, {"answers__item_wrong": selected && !isCorrect})}>
      {selected && (
        <span className="answers__percentage">
          <CheckmarkIcon className="answers__icon answers__icon_checkmark" width={24} height={24}/>
          <CrossIcon className="answers__icon answers__icon_cross" width={10} height={10}/>
          {percent}%
        </span>
      )}
      <button className="answers__button" type="button" onClick={onButtonClick}>{text}</button>
      {selected && (
        <span className="answers__hint">{comment}</span>
      )}
    </li>

  );
};

export default AnswersItem;
