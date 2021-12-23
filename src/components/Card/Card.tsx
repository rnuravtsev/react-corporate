import React, { useContext, useEffect, useState } from 'react';
import './Card.css';
import Answers from '../Answers/Answers';
import { MainContext } from '../../providers/withMainContext';
import {
  increaseQuestionNumber,
  resetActiveAnswer,
  setCorrectAnswer,
} from '../../store/actions';
import { API, MAX_NUMBER_QUESTIONS } from '../../consts';
import { Result } from '../Result/Result';
import { TQuestion } from '../../types';
import axios from 'axios';
import { debounce } from '../../debounce';
import Loader from '../Loader/Loader';
import classNames from 'classnames';

export const Card = () => {
  const [question, setQuestion] = useState<TQuestion>();
  const [nextButtonActive, setNextButtonActive] = useState(false);
  const [finishClicked, setFinishClicked] = useState(false);
  const [isQuestionLoading, setIsQuestionLoading] = useState(true);

  const { state, dispatch } = useContext(MainContext);
  const { questionId, activeAnswerId } = state;

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
    if (questionId < MAX_NUMBER_QUESTIONS) {
      const onDocumentClick = () => {
        dispatch(increaseQuestionNumber());
        dispatch(resetActiveAnswer());
      };
      if (activeAnswerId) {
        document.addEventListener('click', onDocumentClick);
      }
      if (nextButtonActive) {
        document.addEventListener('click', onDocumentClick);
      }
      return () => {
        document.removeEventListener('click', onDocumentClick);
      };
    }
  },[activeAnswerId]);

  const onButtonClick = () => {
    if (questionId < MAX_NUMBER_QUESTIONS) {
      dispatch(increaseQuestionNumber());
      dispatch(resetActiveAnswer());
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
            })}
            type="button"
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
