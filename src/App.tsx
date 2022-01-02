import './App.css';
import 'normalize.css/normalize.css';
import { Main } from './components/Main/Main';
import { withMainContext } from './providers/withMainContext';
import { Provider } from 'react-redux';
import store from "./store/store";

const AppPageContent = () => (
  <Provider store={store}>
    <div className="app">
      <div className="container">
        <Main />
      </div>
    </div>
  </Provider>
);

export default withMainContext(AppPageContent);
