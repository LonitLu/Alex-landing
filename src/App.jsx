import "./normalize.css";
import "./App.scss";
import background from "./images/background.png"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Callback from "./components/Сallback/Callback";


function App() {
  return (
    <>
      <div className="app" style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <Header />
          <Main />
          <Callback />
        </div>
      </div>
    </>
  );
}

export default App;
