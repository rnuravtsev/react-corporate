import {Actions} from "./actions";

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.increaseQuestionNumber:
      return {
        ...state,
        questionId: state.questionId + 1
      };

    case Actions.setCorrectAnswer:
      return {
        ...state,
        numberOfCorrectAnswers: state.numberOfCorrectAnswers + 1
      };

    case Actions.setActiveAnswer:
      return {
        ...state,
        activeAnswerId: action.payload
      };

    case Actions.resetActiveAnswer:
      return {
        ...state,
        activeAnswerId: null
      };

  }
};
