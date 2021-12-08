import { Header } from './components/Header/Header';
import './App.css';
import 'normalize.css/normalize.css';
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import {withMainContext} from "./providers/withMainContext";

const AppPageContent = () => (
  <div className="app root_container">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default  withMainContext(AppPageContent);
