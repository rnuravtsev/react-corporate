import { API, MAX_NUMBER_QUESTIONS } from '../../consts';
import { useFetchResult } from '../../hooks/useFetchResult';
import { useContext } from 'react';
import { MainContext } from '../../providers/withMainContext';
import {ReactComponent} from "../../images/refresh.svg";
import './Result.css';

export const Result = () => {
  const { state } = useContext(MainContext);
  const { numberOfCorrectAnswers } = state;

  const fetchResponse = useFetchResult(API.postResult, numberOfCorrectAnswers);

  const { data, isLoading } = fetchResponse;

  return (
    <>
      {!isLoading ? (
        <>
          <div className="result">
            <div className="result__wrapper">
              <div className="result__score">
                <span>
                  {numberOfCorrectAnswers}/{MAX_NUMBER_QUESTIONS}
                </span>
              </div>
              <div className="result__content">
                <h3 className="result__title">{data?.title}</h3>
                <p className="result__text">{data?.text}</p>
              </div>
            </div>
            <a className="result__refresh" href="/">
              <ReactComponent className="result__icon" width={20} height={20}/>
              Повторить
            </a>
          </div>
        </>
      ) : (
        'Иии...'
      )}
    </>
  );
};
