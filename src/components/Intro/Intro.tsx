import { Link } from 'react-router-dom';
import { ROUTES } from "../../consts";
import './Intro.css';

export const Intro = () => {
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
