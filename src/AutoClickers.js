import React from "react";
import { useCoinStore } from "./state";
import { AutoClicker } from "./AutoClicker.js";
import "./styles.css";

export const AutoClickers = () => {
    const purchasedUpgrades = useCoinStore(s => s.purchasedUpgrades);
    console.log(purchasedUpgrades);
    return purchasedUpgrades.map(upgrade => (
      <AutoClicker key={upgrade.id} upgrade={upgrade} />
    ));
  }