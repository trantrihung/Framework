import { CHANGE_THEME, CHANGE_VALUE } from "../constant/TodoListContant";

export const changeThemeAction = (e) => {
  return {
    type: CHANGE_THEME,
    e,
  };
};

export const changeValueAction = () => {
  return {
    type: CHANGE_VALUE,
  };
};
