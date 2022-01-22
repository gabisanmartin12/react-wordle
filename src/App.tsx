import Board from "./components/Board";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="container h-screen mx-auto flex flex-col">
      <Header />
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
