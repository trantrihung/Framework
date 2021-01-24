const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: { salad: 10, cheese: 20, beef: 30 },
  total: 50,
  // burger: [{ salad: 1 }, { cheese: 2 }, { beef: 1 }],
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_BREADMID": {
      //thay  đổi số lương
      let { propsBurger, amount } = action;
      let burgerUpdate = { ...state.burger };
      if (state.burger[propsBurger] <= 1 && amount === -1) {
        return { ...state };
      }
      burgerUpdate[propsBurger] += amount;
      state.burger = burgerUpdate;

      // tính tổng tiền
      state.total += amount * state.menu[propsBurger];
      return { ...state };
    }
    default:
      return state;
  }
};
