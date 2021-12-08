export type TAnswer = {
  id: number,
  text: string,
  isCorrect: boolean,
  title: string
}

export type TQuestions = {
  question: {
    id: number,
    text: string,
  },
  answers: TAnswer[],
}
