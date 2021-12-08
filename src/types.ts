export type TAnswer = {
  id: number,
  text: string,
  isCorrect: boolean,
  title: string
}

export type TQuestion = {
  question: {
    id: number,
    text: string,
  },
  answers: TAnswer[],
}
