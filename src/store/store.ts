import {Actions} from "./actions";

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.increaseQuestionNumber:
      return {
        ...state,
        questionNumber: state.questionNumber + 1
      };

    case Actions.setCorrectAnswer:
      return {
        ...state,
        numberOfCorrectAnswers: state.numberOfCorrectAnswers + 1
      };
  }
};
