import { Header } from './components/Header/Header';
import './App.css';
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

type answerType = {
  id: string,
  text: string,
  isCorrect: boolean,
  title: string
}

type questionsType = {
  question: string,
  answers: answerType[],
}


function App() {

  const questions : questionsType[] = [
    {
      question: 'Предположим вы придумали вирусный челлендж и просите своих фолловеров лойсить, шерить и репостить. Как назвать это одним словом?',
      answers: [
        { id: '1-1', text: 'Флексить', isCorrect: false, title: 'А вот и нет. Флексить - это хвастаться, выпендриваться, а интенсивная активная раскрутка — это форс. От англ. force — проталкивать, принуждать.' },
        { id: '1-2', text: 'Форсить', isCorrect: true, title: 'Так и есть. Форсить — от англ. force — проталкивать, принуждать.' },
        { id: '1-3', text: 'Буллить', isCorrect: false, title: 'Неправильно. Буллить — от англ. bully — издеваться над кем-нибудь, унижать, "травить". Правильный ответ — форсить. От англ. force — проталкивать, принуждать.' },
      ],
    },
  ];

  return (
    <div className="app root_container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
