//Khởi tạo giá trị ban đầu của store
const stateGioHang = {
  gioHang: [
    {
      id: 1,
      name: "Iphone",
      image: "./images/sp_iphoneX.png",
      soLuong: 1,
      price: 1000,
    },
  ],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIOHANG": {
      //Xy ly logic trong gio hang tai day
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.id === action.spGioHang.id
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGioHang);
      }

      state.gioHang = gioHangCapNhat;
      return { ...state };
    }

    // xóa giỏ hàng theo index
    // case "XOA_GIOHANG": {
    //   let gioHangCapNhat = [...state.gioHang];
    //   gioHangCapNhat.splice(action.index, 1);
    //   state.gioHang = gioHangCapNhat;

    //   return { ...state };
    // }

    case "XOA_GIOHANG_THEOMA": {
      let capNhatGioHang = [...state.gioHang];
      let index = capNhatGioHang.findIndex((sp) => sp.id === action.id);
      if (index === -1) {
        return;
      }
      capNhatGioHang.splice(index, 1);

      state.gioHang = capNhatGioHang;
      return { ...state };
    }

    case "TANGGIAM_SL": {
      const { index, tangGiam } = action;
      let capNhatSoLuong = [...state.gioHang];
      console.log(action);
      if (tangGiam) {
        capNhatSoLuong[index].soLuong += 1;
      } else {
        if (capNhatSoLuong[index].soLuong > 0) {
          capNhatSoLuong[index].soLuong -= 1;
        }
      }
      state.gioHang = capNhatSoLuong;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
