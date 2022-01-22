import Header from "./components/Header";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="container h-screen mx-auto flex flex-col">
      <Header />
      <div className="flex-1"></div>
      <Keyboard />
    </div>
  );
}

export default App;
