import Board from './components/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import Wordle from './components/Wordle';

function App() {
  return (
    <div className="w-screen h-screen sm:mx-auto sm:w-2/3 md:w-3/5 lg:w-2/6 flex flex-col">
      <Header />
      <Wordle>
        <Board />
        <Keyboard />
      </Wordle>
    </div>
  );
}

export default App;
