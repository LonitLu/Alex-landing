import "./normalize.css";
import "./App.scss";
import background from "./images/background.png"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


function App() {
  return (
    <>
      <div className="app" style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <Header />
          <Main />

        </div>
      </div>
    </>
  );
}

export default App;
