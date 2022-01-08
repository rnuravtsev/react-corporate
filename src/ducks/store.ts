import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./slices/quizSlice";

const store = configureStore({
  reducer: {
    quiz: quizSlice
  }
});

export default store;
