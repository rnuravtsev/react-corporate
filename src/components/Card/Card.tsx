import React, { useEffect, useState } from 'react';
import './Card.css';
import Answers from '../Answers/Answers';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuestionNumber,
  setCorrectAnswer,
  resetActiveAnswerId,
} from '../../ducks/slices/quizSlice';
import { API, MAX_NUMBER_QUESTIONS } from '../../consts';
import { Result } from '../Result/Result';
import { TQuestion } from '../../types';
import axios from 'axios';
import { debounce } from '../../debounce';
import Loader from '../Loader/Loader';
import classNames from 'classnames';
import { IQuizState } from '../../ducks/slices/quizSlice';

export const Card = () => {
  const [question, setQuestion] = useState<TQuestion>();
  const [nextButtonActive, setNextButtonActive] = useState(false);
  const [finishClicked, setFinishClicked] = useState(false);
  const [isQuestionLoading, setIsQuestionLoading] = useState(true);

  const questionId = useSelector((state: IQuizState) => state.quiz.questionId);
  const activeAnswerId = useSelector(
    (state: IQuizState) => state.quiz.activeAnswerId
  );
  const dispatch = useDispatch();

  const onDocumentClick = () => {
    dispatch(increaseQuestionNumber());
    dispatch(resetActiveAnswerId());
  };

  useEffect(() => {
    if (questionId < MAX_NUMBER_QUESTIONS) {
      if (activeAnswerId) {
        document.addEventListener('click', onDocumentClick);
      }

      if (nextButtonActive) {
        document.removeEventListener('click', onDocumentClick);
      }

      return () => {
        document.removeEventListener('click', onDocumentClick);
      };
    }
  }, [activeAnswerId, nextButtonActive]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: 'get',
          url: API.getQuestion,
          params: { questionId },
        });
        setQuestion(response.data);
        setIsQuestionLoading(false);
      } catch (err) {
        alert(err);
        setIsQuestionLoading(false);
      }
    })();

    return () => setIsQuestionLoading(true);
  }, [questionId]);

  useEffect(() => {
    if (activeAnswerId) {
      (async () => {
        try {
          const response = await axios({
            method: 'post',
            url: API.postAnswer,
            data: {
              questionId,
              answerId: activeAnswerId,
            },
          });
          const data = response.data;
          setQuestion(data);
          if (data.answers[activeAnswerId - 1].isCorrect) {
            dispatch(setCorrectAnswer());
          }
        } catch (err) {
          alert(err);
        }
      })();
    }
  }, [activeAnswerId]);

  const onButtonClick = () => {
    if (questionId < MAX_NUMBER_QUESTIONS) {
      dispatch(increaseQuestionNumber());
      dispatch(resetActiveAnswerId());
    } else {
      setFinishClicked(true);
    }
  };

  if (finishClicked) {
    return <Result />;
  }

  return (
    <>
      {questionId === 1 && isQuestionLoading ? (
        'Стартуем...'
      ) : (
        <div className="card">
          <div className="card__number">
            {questionId}/{MAX_NUMBER_QUESTIONS}
          </div>
          <h3 className="card__title">{question?.title}</h3>
          <div className="card__answers">
            <Answers answers={question?.answers} />
          </div>
          <button
            className={classNames('card__button', {
              'card__button--loading': isQuestionLoading,
              'card__button--disabled': !activeAnswerId,
            })}
            type="button"
            disabled={!activeAnswerId}
            onClick={debounce(onButtonClick)}
            onMouseEnter={() => setNextButtonActive(true)}
            onMouseLeave={() => setNextButtonActive(false)}
          >
            {!isQuestionLoading ? (
              questionId < MAX_NUMBER_QUESTIONS ? (
                'Дальше'
              ) : (
                'Показать результат'
              )
            ) : (
              <Loader />
            )}
          </button>
        </div>
      )}
    </>
  );
};
