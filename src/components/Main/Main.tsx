import './Main.css';
import {Card} from "../Card/Card";
import {questions} from "../../configs/questions";

export const Main = () => (
  <main className="content">
    <Card questions={questions}/>
  </main>
);

