import { Link } from 'react-router-dom';
import { ROUTES } from '../../consts';
import './Intro.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getQuestion, setAllQuestions } from '../../ducks/slices/quizSlice';

export const Intro = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.all([
      dispatch(getQuestion({ questionId: 1, answerId: 1 })),
      dispatch(getQuestion({ questionId: 2, answerId: 1 })),
      dispatch(getQuestion({ questionId: 3, answerId: 1 })),
      dispatch(getQuestion({ questionId: 4, answerId: 1 })),
      dispatch(getQuestion({ questionId: 5, answerId: 1 })),
      dispatch(getQuestion({ questionId: 6, answerId: 1 })),
      dispatch(getQuestion({ questionId: 7, answerId: 1 })),
      dispatch(getQuestion({ questionId: 8, answerId: 1 })),
    ]).then((response) => {
      // TODO: Разобрать типы
      //@ts-ignore
      const allQuestions = response.map((el) => el.payload);
      dispatch(setAllQuestions(allQuestions));
    });
  });
  return (
    <div className="intro">
      <p className="intro__content">
        Давайте проверим, понимаете ли вы современный подростковый сленг и
        сможете ли понять, когда следует залутаться, а когда — рофлить ;)
      </p>
      <Link to={ROUTES.quiz} className="intro__button btn">
        Начать
      </Link>
    </div>
  );
};
