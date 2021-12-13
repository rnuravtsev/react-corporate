import React, {createContext, useReducer} from 'react';
import {reducer} from "../store/store";

export interface IMainContext {
  state: {
    questionNumber: number,
    numberOfCorrectAnswers: number,
  },
  dispatch: React.Dispatch<{type: string; payload?: unknown}>;
}

const initialMainContext = {
  questionNumber: 1,
  numberOfCorrectAnswers: 0,
};

export const MainContext = createContext<IMainContext>({state: initialMainContext, dispatch: () => {}});

export const withMainContext = <P extends Object>(Component: React.ComponentType<P>) => {
  const Wrapper: React.FC<P> = (props: P) => {
    const [state, dispatch] = useReducer(reducer, initialMainContext);
    return (
      <MainContext.Provider
        value={{
          dispatch,
          state,
        }}
      >
        <Component {...props} />
      </MainContext.Provider>

    );
  };
  Wrapper.displayName = `withMainContext${Component.displayName}`;

  return Wrapper;
};
