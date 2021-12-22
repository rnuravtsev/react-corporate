import React, {useContext, useEffect, useState} from 'react';
import {ReactComponent as CheckmarkIcon} from '../../images/checkmark.svg';
import {ReactComponent as CrossIcon} from '../../images/cross.svg';
import classNames from 'classnames';
import {TAnswer} from '../../types';
import {MainContext} from '../../providers/withMainContext';
import {setActiveAnswer} from '../../store/actions';
import {debounce} from "../../debounce";

const AnswersItem: React.FC<TAnswer> = ({
                                          id: answerId,
                                          isCorrect,
                                          text,
                                          comment,
                                          percent,
                                        }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const {state, dispatch} = useContext(MainContext);

  const {questionId, activeAnswerId} = state;

  const currentAnswer = answerId === activeAnswerId;

  useEffect(() => () => setSelected(false), [questionId]);

  const onButtonClick = () => {
    dispatch(setActiveAnswer(answerId));
    setSelected(true);
  };

  const renderCheckmarkPercent = (percent: number) => {
    return (
      <span className="answers__percentage">
        <CheckmarkIcon
          className="answers__icon answers__icon_checkmark"
          width={20}
          height={20}
        />
        {percent || '0'}%
    </span>
    );
  };

  const renderPercentage = () => {
    if (selected && currentAnswer) {
      return (
        <>
          {isCorrect === false
            ? (
            <span className="answers__percentage">
              <CrossIcon
                className="answers__icon answers__icon_cross"
                width={10}
                height={10}
              />
              {percent}%
            </span>
          )
          : isCorrect === true
          ? renderCheckmarkPercent(percent)
          : null
          }
        </>
      );
    }

    if (!selected && activeAnswerId) {
      if (!currentAnswer && isCorrect) {
        return renderCheckmarkPercent(percent);
      }
      if (percent) {
        return <span className="answers__percentage">{percent}%</span>;
      }
    }
  };

  return (
    <li
      className={classNames(
        'answers__item',
        {answers__item_unselected: activeAnswerId && !selected},
        {answers__item_selected: currentAnswer && selected},
        {answers__item_correct: activeAnswerId && isCorrect},
        {answers__item_wrong: currentAnswer && isCorrect === false}
      )}
    >
      {renderPercentage()}
      <button
        className="answers__button"
        type="button"
        onClick={debounce(onButtonClick)}
        disabled={!!activeAnswerId}
      >
        {text}
      </button>
      {currentAnswer && <span className="answers__hint">{comment}</span>}
    </li>
  );
};

export default AnswersItem;
