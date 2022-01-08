import { createSlice } from '@reduxjs/toolkit';

export interface IQuizState {
  quiz: {
    questionId: number;
    numberOfCorrectAnswers: number;
    activeAnswerId: null | number;
    loading: boolean;
    error: string;
  };
}

const initialState = {
  questionId: 1,
  numberOfCorrectAnswers: 0,
  activeAnswerId: null,
  loading: true,
  error: '',
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startFetching(state) {
      state.loading = true;
    },
    endFetching(state) {
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
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
    },
  },
});

const { actions, reducer } = quizSlice;

export const {
  increaseQuestionNumber,
  setCorrectAnswer,
  setActiveAnswerId,
  resetActiveAnswerId,
} = actions;

export default reducer;
