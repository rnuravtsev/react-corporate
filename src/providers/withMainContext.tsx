import React, {createContext, useReducer} from 'react';
import {reducer} from "../store/reducer";

export interface IMainContext {
  state: {
    questionId: number,
    numberOfCorrectAnswers: number,
    activeAnswerId: number | null,
  },
  dispatch: React.Dispatch<{type: string; payload?: unknown}>;
}

const initialMainContext = {
  questionId: 1,
  numberOfCorrectAnswers: 0,
  activeAnswerId: null,
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
