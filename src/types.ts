export type TAnswer = {
  id: number,
  text: string,
  isCorrect: boolean,
  comment: string,
  percent: number,
}

export type TQuestion = {
  id: number,
  title: string,
  answers: TAnswer[],
}
