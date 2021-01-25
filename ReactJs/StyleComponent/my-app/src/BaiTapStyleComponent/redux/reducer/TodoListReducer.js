import { TodoListDarkTheme } from "../../Theme/TodoListDarkTheme";
import { TodoListLightTheme } from "../../Theme/TodoListLightTheme";
import { TodoListPrimaryTheme } from "../../Theme/TodoListPrimaryTheme";
import { CHANGE_THEME } from "../constant/TodoListContant";

const defaultState = {
  theme: TodoListDarkTheme,
  arrThemes: [
    { id: 1, name: "Dark Theme", theme: TodoListDarkTheme },
    { id: 2, name: "Light Theme", theme: TodoListLightTheme },
    { id: 3, name: "Primary Theme", theme: TodoListPrimaryTheme },
  ],
};

export const TodoListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      const { value } = action.e.target;
      // console.log(value);
      // let index = state.arrThemes.findIndex((theme) => {
      //   return theme.id == value;
      // });
      // if (index !== -1) {
      //   state.theme = state.arrThemes[index].theme;
      // }
      let arrThemesUpdate = [...state.arrThemes];
      arrThemesUpdate = arrThemesUpdate.filter((item) => {
        return item.id == value;
      });
      // console.log(arrThemesUpdate[0].theme);
      // state.theme = arrThemesUpdate[0].theme;
      return { ...state, theme: arrThemesUpdate[0].theme };
    }
    default:
      return { ...state };
  }
};
