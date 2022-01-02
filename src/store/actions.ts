import {createAction} from "@reduxjs/toolkit";

export enum Actions {
  increaseQuestionNumber = 'INCREASE_QUESTION_NUMBER',
  setActiveAnswer = 'SET_ACTIVE_ANSWER',
  resetActiveAnswer = 'RESET_ACTIVE_ANSWER',
  setCorrectAnswer = 'SET_CORRECT_ANSWER',
}

export const increaseQuestionNumber = createAction(Actions.increaseQuestionNumber);

export const setCorrectAnswer = createAction(Actions.setCorrectAnswer);

export const setActiveAnswer = createAction(Actions.setActiveAnswer);

export const resetActiveAnswer = createAction(Actions.resetActiveAnswer);
