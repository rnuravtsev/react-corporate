import React, {useContext, useEffect, useState} from 'react';
import { ReactComponent as CheckmarkIcon } from '../../images/checkmark.svg';
import { ReactComponent as CrossIcon } from '../../images/cross.svg';
import classNames from 'classnames';
import { TAnswer } from '../../types';
import { MainContext } from '../../providers/withMainContext';
import {setActiveAnswer} from '../../store/actions';

const AnswersItem: React.FC<TAnswer> = ({
  id: answerId,
  isCorrect,
  text,
  comment,
  percent,
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const { state, dispatch } = useContext(MainContext);

  const { questionId, activeAnswerId } = state;

  const currentAnswer = answerId === activeAnswerId;

  useEffect(() => () => setSelected(false), [questionId]);

  const onButtonClick = () => {
    dispatch(setActiveAnswer(answerId));
    setSelected(true);
  };

  const renderPercentage = () => {
    if (selected && currentAnswer) {
      return (
        <span className="answers__percentage">
          {isCorrect ? (
            <CheckmarkIcon
              className="answers__icon answers__icon_checkmark"
              width={24}
              height={24}
            />
          ) : (
            <CrossIcon
              className="answers__icon answers__icon_cross"
              width={10}
              height={10}
            />
          )}
          {percent}%
        </span>
      );
    }

    if (!selected && activeAnswerId) {
      if (!currentAnswer && isCorrect) {
        return (
          <span className="answers__percentage">
            <CheckmarkIcon
              className="answers__icon answers__icon_checkmark"
              width={24}
              height={24}
            />
            {percent || 0}%
          </span>
        );
      }
      return <span className="answers__percentage">{percent}%</span>;
    }
  };

  return (
    <li
      className={classNames(
        'answers__item',
        { answers__item_unselected: activeAnswerId && !selected },
        { answers__item_selected: currentAnswer && selected },
        { answers__item_correct: isCorrect },
        { answers__item_wrong: currentAnswer && !isCorrect }
      )}
    >
      {renderPercentage()}
      <button className="answers__button" type="button" onClick={onButtonClick} disabled={!!activeAnswerId}>
        {text}
      </button>
      {currentAnswer && <span className="answers__hint">{comment}</span>}
    </li>
  );
};

export default AnswersItem;
