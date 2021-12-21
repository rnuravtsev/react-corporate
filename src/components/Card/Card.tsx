import React, {useContext, useEffect, useState} from 'react';
import './Card.css';
import Answers from '../Answers/Answers';
import { MainContext } from '../../providers/withMainContext';
import { increaseQuestionNumber, resetActiveAnswer, setCorrectAnswer } from '../../store/actions';
import { API, MAX_NUMBER_QUESTIONS } from '../../consts';
import { Result } from '../Result/Result';
import {TQuestion} from '../../types';
import axios from 'axios';

export const Card = () => {
  const [question, setQuestion] = useState<TQuestion>();
  const [finishClicked, setFinishClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {state, dispatch} = useContext(MainContext);
  const {questionId, activeAnswerId} = state;

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: 'get',
          url: API.getQuestion,
          params: {questionId},
        });
        setQuestion(response.data);
        setIsLoading(false);
      } catch (err) {
        alert(err);
        setIsLoading(false);
      }
    })();
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
          setIsLoading(false);
          if (data.answers[activeAnswerId - 1].isCorrect) {
            dispatch(setCorrectAnswer());
          }
        } catch (err) {
          alert(err);
          setIsLoading(false);
        }
      })();
    }
  }, [activeAnswerId]);

  const onButtonClick = () => {
    if (questionId < MAX_NUMBER_QUESTIONS) {
      dispatch(increaseQuestionNumber());
      dispatch(resetActiveAnswer());
    } else {
      setFinishClicked(true);
    }
  };

  if (finishClicked) {
    return (
      <Result />
    );
  }

  return (
    <>
      {
        !isLoading
          ? (<div className="card">
            <div className="card__number">
              {questionId}/{MAX_NUMBER_QUESTIONS}
            </div>
            <h3 className="card__title">{question?.title}</h3>
            <div className="card__answers">
              <Answers answers={question?.answers}/>
            </div>
            <button className="card__button" type="button" onClick={onButtonClick}>
              {
                questionId < MAX_NUMBER_QUESTIONS
                  ? 'Дальше'
                  : 'Показать результат'
              }
            </button>
          </div>)
          : ('....Loading')
      }
    </>
  );
};
