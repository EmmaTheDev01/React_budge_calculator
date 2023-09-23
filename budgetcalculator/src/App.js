import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import Total from "./components/Total";
import Transactions from "./components/Transactions";

function App() {
  return <div className="App">
    <Header/>
    <Balance/>
    <Total/>
    <Transactions/>
  </div>;
}

export default App;
