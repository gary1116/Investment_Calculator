import './App.css';
import FloatingImage from './components/FloatingImage/FloatingImage';
import Header from '../src/components/Header/Header';
import MainContainer from '../src/components/main-container/MainContainer';

function App() {
  return (
    <div className="App fullscreen-element">
      <Header />
      <MainContainer />
      <FloatingImage />
    </div>
  );
}

export default App;
