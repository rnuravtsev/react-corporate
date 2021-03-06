import { TQuestion} from "../types";


export const questions : TQuestion[] = [
  {
    id: 1,
    title: 'Предположим вы придумали вирусный челлендж и просите своих фолловеров лойсить, шерить и репостить. Как назвать это одним словом?',
    answers: [
      {
        id: 1,
        text: 'Флексить',
        isCorrect: false,
        comment: 'А вот и нет. Флексить - это хвастаться, выпендриваться, а интенсивная активная раскрутка — это форс. От англ. force — проталкивать, принуждать.',
        percent: 20,
      },
      {
        id: 2,
        text: 'Форсить',
        isCorrect: true,
        comment: 'Так и есть. Форсить — от англ. force — проталкивать, принуждать.',
        percent: 20,
      },
      {
        id: 3,
        text: 'Буллить',
        isCorrect: false,
        comment: 'Неправильно. Буллить — от англ. bully — издеваться над кем-нибудь, унижать, "травить". Правильный ответ — форсить. От англ. force — проталкивать, принуждать.',
        percent: 20,
      },
    ],
  },
];
