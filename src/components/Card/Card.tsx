import React from 'react';
import './Card.css';
import Answers from '../Answers/Answers';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuestionNumber,
  resetActiveAnswerId,
} from '../../ducks/slices/quizSlice';
import { MAX_NUMBER_QUESTIONS, ROUTES } from '../../consts';
import Loader from '../Loader/Loader';
import classNames from 'classnames';
import { IQuizState } from '../../ducks/slices/quizSlice';
import { debounce } from '../../debounce';

export const Card = () => {
  const questions = useSelector((state: IQuizState) => state.quiz.questions);
  const questionId = useSelector((state: IQuizState) => state.quiz.questionId);
  const activeAnswerId = useSelector(
    (state: IQuizState) => state.quiz.activeAnswerId
  );
  const isQuestionLoading = useSelector(
    (state: IQuizState) => state.quiz.loading
  );
  const dispatch = useDispatch();

  const matchQuestion = questions.find((el) => el.id === questionId);

  const onButtonClick = () => {
    dispatch(increaseQuestionNumber());
    dispatch(resetActiveAnswerId());
  };
  return (
    <>
      <div className="card">
        <div className="card__number">
          {questionId}/{MAX_NUMBER_QUESTIONS}
        </div>
        <h3 className="card__title">{matchQuestion?.title}</h3>
        <div className="card__answers">
          <Answers answers={matchQuestion?.answers} />
        </div>
        {!isQuestionLoading ? (
          questionId < MAX_NUMBER_QUESTIONS ? (
            <button
              className={classNames('card__button btn', {
                'card__button--loading': isQuestionLoading,
                'card__button--disabled': !activeAnswerId,
              })}
              type="button"
              disabled={!activeAnswerId}
              onClick={debounce(onButtonClick)}
            >
              Дальше
            </button>
          ) : (
            <Link className="card__button btn" to={ROUTES.result}>
              Показать результат
            </Link>
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
