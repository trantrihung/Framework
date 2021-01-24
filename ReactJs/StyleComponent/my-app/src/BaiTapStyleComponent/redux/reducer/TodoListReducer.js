import { TodoListDarkTheme } from "../../Theme/TodoListDarkTheme";
import { TodoListLightTheme } from "../../Theme/TodoListLightTheme";
import { TodoListPrimaryTheme } from "../../Theme/TodoListPrimaryTheme";

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
    case "CHANGE_THEME": {
      const { value } = action.e.target;
      // console.log(value);
      // let index = state.arrThemes.findIndex((theme) => {
      //   return theme.id == value;
      // });
      // if (index !== -1) {
      //   state.theme = state.arrThemes[index].theme;
      // }
      [...state.arrThemes].filter((item) => {
        return item.id == value;
      });
      return {
        ...state,
        theme: state.arrThemes.filter((item) => item.id == value),
      };
    }
    default:
      return { ...state };
  }
};
