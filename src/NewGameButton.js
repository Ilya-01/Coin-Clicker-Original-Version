import React from "react";
import { useCoinStore } from "./state";

import "./styles.css";

export const NewGameButton = () =>{
    const actions = useCoinStore(s => s.actions);
    return (
      <button onClick={() => actions.newGame()} style={{ marginTop: 50 }}>
        New Game
      </button>
    );
  }