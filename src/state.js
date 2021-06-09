import create from "zustand";

const getInitialScore = () => 0;
const getInitialUpgrades = () => ({
  1: {
    id: 1,
    cps: 1,
    cost: 10,
    name: "X1"
  },
  2: {
    id: 2,
    cps: 5,
    cost: 50,
    name: "X5"
  },
  3: {
    id: 3,
    cps: 25,
    cost: 100,
    name: "X25"
  }
});

export const [useCoinStore, store] = create((set, get) => ({
  score: getInitialScore(),
  upgrades: getInitialUpgrades(),
  purchasedUpgrades: [],
  actions: {
    newGame() {
      set({
        score: getInitialScore(),
        upgrades: getInitialUpgrades(),
        purchasedUpgrades: []
      });
    },
    changeScore(amount = 1) {
      set(state => ({ score: state.score + amount }));
    },
    purchase(upgradeId) {
      const { upgrades, actions } = get();
      const upgrade = upgrades[upgradeId];

      actions.changeScore(-upgrade.cost);
      set(state => ({
        purchasedUpgrades: [...state.purchasedUpgrades, upgrade]
      }));
      // setInterval(() => {
      //   actions.changeScore(1);
      // }, 1000 / upgrade.cps);
    }
  }
}));

store.setState(JSON.parse(window.localStorage.getItem("state")));

store.subscribe(state => {
  const stateCopy = { ...state };
  delete stateCopy["actions"];
  window.localStorage.setItem("state", JSON.stringify(stateCopy));
});
