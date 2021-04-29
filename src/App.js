import logo from './logo.svg';
import { Provider, connect } from 'react-redux';
import './App.css';
import { store } from './config/store';

const CounterComponent = () => (
  <header className="App-header">
    <div>1</div>
    <button>incrementar</button>
    <button>decrementar</button>
  </header>
)

const mapStateToProps = ({ counter }) => ({
  counter, 
})

const ConnectedCounterComponent = connect()(CounterComponent)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent></CounterComponent>
      </div>
    </Provider>
  );
}

export default App;
