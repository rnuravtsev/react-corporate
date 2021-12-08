import React from "react";

export interface IChosenAnswers {
    [key: number]: {
      [key: number]: number,
  },
}

export interface IMainContext {
  totalPlayersQuantity: number,
  setTotalPlayersQuantity: React.Dispatch<React.SetStateAction<number>>,
  chosenAnswersStore: IChosenAnswers,
  setChosenAnswersStore: React.Dispatch<React.SetStateAction<IChosenAnswers>>
}
