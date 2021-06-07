import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useCoinStore } from "./state";
import { useInterval } from "react-use-timeout";

import "./styles.css";

function AutoClicker({ upgrade }) {
  const actions = useCoinStore(s => s.actions);
  const greaterThan1000cps = upgrade.cps > 1000;
  const delay = Math.max(1000 / upgrade.cps, 1);
  const incAmount = greaterThan1000cps ? upgrade.cps / 1000 : 1;
  const incScore = useCallback(() => actions.changeScore(incAmount), [
    actions,
    incAmount
  ]);
  const timeout = useInterval(incScore, delay);

  useEffect(() => {
    timeout.start();
  }, [timeout]);

  return null;
}

function UpgradeList() {
  const score = useCoinStore(s => s.score);
  const upgrades = useCoinStore(s => s.upgrades);
  const actions = useCoinStore(s => s.actions);

  return (
    <div className="UpgradeList">
      <h3 className="UpgradesHeader">Upgrades</h3>
      <ul>
        {Object.keys(upgrades)
          .map(key => upgrades[key])
          .map(upgrade => (
            <li key={upgrade.id} className="Upgrade">
              <div>
                {upgrade.name} ({upgrade.cps}cps): {upgrade.cost}c
              </div>
              <button
                className="buyBtn"
                disabled={score < upgrade.cost}
                onClick={() => actions.purchase(upgrade.id)}
              >
                Buy
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
function Score() {
  const score = useCoinStore(s => s.score);
  return <input value={score} />;
}
function BigCoinButton() {
  const actions = useCoinStore(s => s.actions);
  return (
    <button className="coinBtn" onClick={() => actions.changeScore(1)} />
  );
}

function AutoClickers() {
  const purchasedUpgrades = useCoinStore(s => s.purchasedUpgrades);
  console.log(purchasedUpgrades);
  return purchasedUpgrades.map(upgrade => (
    <AutoClicker key={upgrade.id} upgrade={upgrade} />
  ));
}

function NewGameButton() {
  const actions = useCoinStore(s => s.actions);
  return (
    <button onClick={() => actions.newGame()} style={{ marginTop: 50 }}>
      New Game
    </button>
  );
}

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