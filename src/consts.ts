export const MAX_NUMBER_QUESTIONS = 8;

export enum API {
  getQuestion = `https://fun.i-novus.ru/api/question`,
  postAnswer = 'https://fun.i-novus.ru/api/question',
  postResult = 'https://fun.i-novus.ru/api/result',
}

export enum APILOCAL {
  getQuestion = `http://localhost:8080/api/question`,
  postAnswer = 'http://localhost:8080/api/question',
  postResult = 'http://localhost:8080/api/result',
}
