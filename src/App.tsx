import './App.css';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import store from './ducks/store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Card } from './components/Card/Card';
import { Result } from './components/Result/Result';
import { Intro } from './components/Intro/Intro';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <main className="content">
          <div className="container">
            <Routes>
              <Route path="/quiz" element={<Card />} />
              <Route path="/result" element={<Result />} />
              <Route path="/" element={<Intro />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
