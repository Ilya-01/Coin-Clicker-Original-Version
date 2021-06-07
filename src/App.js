import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { AutoClickers } from "./AutoClickers.js";
import { BigCoinButton } from "./BigCoinButton.js";
import { UpgradeList } from "./UpgradeList.js";
import { Score } from "./Score.js";
import { NewGameButton } from "./NewGameButton.js";

function App() {
  return (
    <div className="App">
      <Score />
      <BigCoinButton />
      <UpgradeList />
      <AutoClickers />
      <NewGameButton />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;