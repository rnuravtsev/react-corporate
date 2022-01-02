import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionId: 1,
  numberOfCorrectAnswers: 0,
  activeAnswerId: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    increaseQuestionNumber(state) {
      state.questionId += 1;
    },
    setCorrectAnswer(state) {
      state.numberOfCorrectAnswers += 1;
    },
    setActiveAnswerId(state, action) {
      state.activeAnswerId = action.payload;
    },
    resetActiveAnswerId(state) {
      state.activeAnswerId = null;
    }
  },
});

const { actions, reducer } = quizSlice;

export const {
  increaseQuestionNumber,
  setCorrectAnswer,
  setActiveAnswerId,
  resetActiveAnswerId
} = actions;

export default reducer;
