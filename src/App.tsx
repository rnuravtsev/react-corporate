import {Header} from './components/Header/Header';
import './App.css';
import {Footer} from "./components/Footer/Footer";
import {Main} from "./components/Main/Main";

function App() {
  return (
    <div className="app root_container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
