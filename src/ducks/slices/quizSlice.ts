import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TQuestion } from '../../types';
import axios from 'axios';
import { API } from '../../consts';

export const fetchQuestion = createAsyncThunk(
  'quiz/fetchQuestion',
  async (questionId: number, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'get',
        url: API.getQuestion,
        params: { questionId },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const postQuestion = createAsyncThunk(
  'quiz/postQuestion',
  async (
    data: { questionId: number; answerId: number },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await axios({
        method: 'post',
        url: API.postAnswer,
        data,
      });
      const resolvedData = response.data;
      const isCorrectAnswer = resolvedData.answers[data.answerId - 1].isCorrect;
      if (isCorrectAnswer) {
        dispatch(setCorrectAnswer());
      }
      return resolvedData;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getResult = createAsyncThunk(
  'quiz/getResult',
  async (correctAnswersCounter: number, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'get',
        url: API.getResult,
        params: {
          correctAnswersCounter,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export interface IQuizState {
  quiz: {
    question: TQuestion;
    questionId: number;
    numberOfCorrectAnswers: number;
    activeAnswerId: null | number;
    loading: boolean;
    error: string | unknown | null;
  };
}

const initialState = {
  question: {},
  questionId: 1,
  numberOfCorrectAnswers: 0,
  activeAnswerId: null,
  loading: false,
  error: null,
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
    setQuestions(state, action) {
      state.question = action.payload;
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
  extraReducers: (builder) => {
    builder.addCase(fetchQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.question = action.payload;
    });
    builder.addCase(fetchQuestion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchQuestion.rejected, (state, action) => {
      state.loading = false;
      // TODO: Разобраться с типом
      // @ts-ignore
      state.error = action.payload;
    });
    builder.addCase(postQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.question = action.payload;
    });
    builder.addCase(postQuestion.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postQuestion.rejected, (state, action) => {
      state.loading = false;
      // TODO: Разобраться с типом
      // @ts-ignore
      state.error = action.payload;
    });
    builder.addCase(getResult.fulfilled, (state, action) => {
      state.loading = false;
      state.numberOfCorrectAnswers = action.payload;
    });
    builder.addCase(getResult.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getResult.rejected, (state, action) => {
      state.loading = false;
      // TODO: Разобраться с типом
      // @ts-ignore
      state.error = action.payload;
    });
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
