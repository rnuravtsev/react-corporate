import React, {createContext, useState} from 'react';
import {chosenAnswers} from "../configs/chosenAnswers";
import {IChosenAnswers, IMainContext} from "../interfaces";

const initialMainContext: IMainContext = {
  totalPlayersQuantity: 0,
  setTotalPlayersQuantity: () => {},
  chosenAnswersStore: chosenAnswers,
  setChosenAnswersStore: () => {}
};

const MainContext = createContext<IMainContext>(initialMainContext);

export const withMainContext = <P extends Object>(Component: React.ComponentType<P>) => {
  const Wrapper: React.FC<P> = (props: P) => {
    const [chosenAnswersStore, setChosenAnswersStore] = useState<IChosenAnswers>(chosenAnswers);
    const [totalPlayersQuantity, setTotalPlayersQuantity] = useState<number>(0);

    return (
      <MainContext.Provider
        value={{
          totalPlayersQuantity,
          setTotalPlayersQuantity,
          chosenAnswersStore,
          setChosenAnswersStore,
        }}
      >
        <Component {...props} />
      </MainContext.Provider>

    );
  };
  Wrapper.displayName = `withMainContext${Component.displayName}`;

  return Wrapper;
};
