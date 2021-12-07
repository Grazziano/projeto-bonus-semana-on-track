import "./App.css";
import Cards from "./components/Cards";
import img from "./assets/images/memoria-logo.png";

function App() {
  return (
    <div>
      {/* <h1>Memory Game</h1> */}
      <img className="title-image" src={img} alt="Memory Game" />
      <div className="container">
        <Cards />
      </div>
    </div>
  );
}

export default App;
