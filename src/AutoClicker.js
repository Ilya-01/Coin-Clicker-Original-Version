import { useCallback, useEffect } from "react";
import { useCoinStore } from "./state";
import { useInterval } from "react-use-timeout";

import "./styles.css";

export const AutoClicker = ({upgrade}) => {
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