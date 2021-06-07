import React from "react";
import { useCoinStore } from "./state";

import "./styles.css";

export const UpgradeList = () => {
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