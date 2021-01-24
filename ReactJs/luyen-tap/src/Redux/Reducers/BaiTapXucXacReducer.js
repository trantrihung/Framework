const stateDefault = {
  taiXiu: true, //true: là tài ( 3-> 11) false: là xỉu( 11->)
  mangXucXac: [
    { ma: 1, hinhAnh: "./images/gameXucXac/1.png" },
    { ma: 2, hinhAnh: "./images/gameXucXac/2.png" },
    { ma: 3, hinhAnh: "./images/gameXucXac/3.png" },
  ],
  soBanThang: 0,
  tongSoBanThang: 0,
};

export const BaiTapXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "TAIXIU": {
      console.log(action);
      state.taiXiu = action.taiXiu;
      return { ...state };
    }
    case "PLAY_GAME": {
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        console.log(soNgauNhien);
        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./images/gameXucXac/${soNgauNhien}.png`,
        };

        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;

      state.tongSoBanThang += 1;

      let tongDiem = mangXucXacNgauNhien.reduce((total, xucXac, index) => {
        return (total += xucXac.ma);
      }, 0);
      if ((tongDiem > 11 && state.taiXiu) || (tongDiem < 11 && !state.taiXiu)) {
        state.soBanThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

// export default BaiTapXucXacReducer;
