const stateDefault = {
  mangDuLieu: [],
};

const bookVeXemPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_VE": {
      let mangDuLieuUpdate = [...state.mangDuLieu];
      let index = mangDuLieuUpdate.findIndex((item) => {
        return item.ma === action.ma;
      });
      console.log(typeof action.ma);
      if (index !== -1) {
        mangDuLieuUpdate.splice(index, 1);
      } else {
        mangDuLieuUpdate.push(action.ma);
      }

      state.mangDuLieu = mangDuLieuUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default bookVeXemPhimReducer;
