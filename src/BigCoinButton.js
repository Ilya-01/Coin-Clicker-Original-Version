import React from "react";
import { useCoinStore } from "./state";

import "./styles.css";

export const BigCoinButton = () => {
    const actions = useCoinStore(s => s.actions);
    return (
      <button className="coinBtn" onClick={() => actions.changeScore(1)} />
    );
  }