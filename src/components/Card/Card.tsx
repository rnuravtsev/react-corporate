import React, { useContext } from 'react';
import './Card.css';
import Answers from '../Answers/Answers';
import { useFetchQuestion } from '../../hooks/useFetchQuestion';
import { MainContext } from '../../providers/withMainContext';
import { increaseQuestionNumber } from '../../store/actions';
import { API, MAX_NUMBER_QUESTIONS } from '../../consts';

export const Card = () => {
  const { state, dispatch } = useContext(MainContext);
  const { questionNumber } = state;

  const fetchResponse = useFetchQuestion(API.getQuestion, questionNumber);

  const { data, isLoading } = fetchResponse;

  const onButtonClick = () => {
    dispatch(increaseQuestionNumber());
  };

  return (
    <div className="card">
      <div className="card__number">
        {questionNumber}/{MAX_NUMBER_QUESTIONS}
      </div>
      <h3 className="card__title">{data?.title}</h3>
      <div className="card__answers">
        <Answers answers={data?.answers} />
      </div>
      {questionNumber < MAX_NUMBER_QUESTIONS ? (
        <button className="card__button" type="button" onClick={onButtonClick}>
          Дальше
        </button>
      ) : (
        <button className="card__button" type="button" onClick={onButtonClick}>
          Показать результат
        </button>
      )}
    </div>
  );
};
