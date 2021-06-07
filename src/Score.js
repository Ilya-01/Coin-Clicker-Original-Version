import React from "react";
import { useCoinStore } from "./state";

import "./styles.css";

export const Score = () => {
    const score = useCoinStore(s => s.score);
    return <input value={score} />;
  }