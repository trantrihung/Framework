import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";
import { BurgerReducer } from "./BurgerReducer";
import { QuanLySinhVienReducer } from "./QuanLySinhVienReducer";
import { BaiTapXucXacReducer } from "./BaiTapXucXacReducer";
import { BaiTapOanTuXiReducer } from "./BaiTapOanTuXiReducer";

// Store tổng ứng dụng
export const rootReducer = combineReducers({
  // Nơi sẽ chứa  các reducer cho nghiệp vụ (store con)
  GioHangReducer,
  BurgerReducer,
  QuanLySinhVienReducer,
  BaiTapXucXacReducer,
  BaiTapOanTuXiReducer,
});
