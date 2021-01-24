const stateDefault = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "trantrihung",
      lop: "fe53",
      sdt: "0338482021",
      email: "trantrihung021196@gmail.com",
    },
  ],
};

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINHVIEN": {
      console.log(action);
      const mangSVUpdate = [...state.mangSinhVien, action.sinhVien];
      state.mangSinhVien = mangSVUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
