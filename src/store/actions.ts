export enum Actions {
  increaseQuestionNumber = 'INCREASE_QUESTION_NUMBER',
  setCorrectAnswer = 'SET_CORRECT_ANSWER',
}

export const increaseQuestionNumber = () => ({
  type: Actions.increaseQuestionNumber
});

export const setCorrectAnswer = () => ({
  type: Actions.setCorrectAnswer
});
