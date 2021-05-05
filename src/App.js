import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { store, persistor } from './config/store';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/Router';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <AppRouter />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
