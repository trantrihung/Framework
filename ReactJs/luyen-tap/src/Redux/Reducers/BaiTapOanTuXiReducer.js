const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", img: "./images/GameOanTuXi/keo.png", datCuoc: false },
    { ma: "bao", img: "./images/GameOanTuXi/bao.png", datCuoc: false },
    { ma: "bua", img: "./images/GameOanTuXi/bua.png", datCuoc: true },
  ],
  ketQua: "I love you, 3000",
  soBanThang: 0,
  tongSoBanChoi: 0,
  computer: { ma: "keo", img: "./images/GameOanTuXi/keo.png" },
  addClass: true,
};

export const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_ITEM": {
      console.log(action);
      let updateMangDatCuoc = [...state.mangDatCuoc];

      updateMangDatCuoc = updateMangDatCuoc.map((item) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      state.mangDatCuoc = updateMangDatCuoc;
      return { ...state };
    }

    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }

    case "CA_CUOC": {
      let player = state.mangDatCuoc.find((item) => {
        return (item.datCuoc = true);
      });
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Bạn đã hòa rồi :))";
          } else if (computer.ma === "bua") {
            state.ketQua = "Bạn thua sml rồi :))";
          } else {
            state.ketQua = "You winnnnnnn!!!";
          }

          break;
        default:
          state.ketQua = "You winnnn!!!";
      }
      return { ...state };
    }

    case "ADD_CLASS": {
      state.addClass = !state.addClass;

      return { ...state };
    }
    default:
      return { ...state };
  }
};
