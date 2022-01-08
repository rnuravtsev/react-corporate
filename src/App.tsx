import './App.css';
import 'normalize.css/normalize.css';
import { Main } from './components/Main/Main';
import { Provider } from 'react-redux';
import store from "./ducks/store";

const AppPageContent = () => (
  <Provider store={store}>
    <div className="app">
      <div className="container">
        <Main />
      </div>
    </div>
  </Provider>
);

export default AppPageContent;
