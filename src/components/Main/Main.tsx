import { useState } from 'react';
import './Main.css';
import {Card} from "../Card/Card";

export const Main = () => {

  const [startClicked, setStartClicked] = useState(false);

  return (
    <main className="content">
      {startClicked ? (
        <Card />
      ) : (
        <div className="start__content">
          <p>Давайте проверим, понимаете ли вы современный подростковый сленг и сможете ли понять, когда следует фармить, а когда — рофлить ;)</p>
          <button className="start__button" onClick={() => {setStartClicked(true);}}>Начать</button>
      </div>
      )}
    </main>
  );
};
