export type TAnswer = {
  id: number,
  text: string,
  isCorrect: boolean,
  hint: string,
  percent: number,
}

export type TQuestion = {
  id: number,
  title: string,
  answers: TAnswer[],
}
