export enum Actions {
  increaseQuestionNumber = 'INCREASE_QUESTION_NUMBER',
  setActiveAnswer = 'SET_ACTIVE_ANSWER',
  resetActiveAnswer = 'RESET_ACTIVE_ANSWER',
  setCorrectAnswer = 'SET_CORRECT_ANSWER',
}

export const increaseQuestionNumber = () => ({
  type: Actions.increaseQuestionNumber
});

export const setCorrectAnswer = () => ({
  type: Actions.setCorrectAnswer
});

export const setActiveAnswer = (id: number) => ({
  type: Actions.setActiveAnswer,
  payload: id
});

export const resetActiveAnswer = () => ({
  type: Actions.resetActiveAnswer
});
