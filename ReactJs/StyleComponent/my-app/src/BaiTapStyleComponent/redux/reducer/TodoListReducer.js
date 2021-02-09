import { TodoListDarkTheme } from "../../Theme/TodoListDarkTheme";
import { TodoListLightTheme } from "../../Theme/TodoListLightTheme";
import { TodoListPrimaryTheme } from "../../Theme/TodoListPrimaryTheme";
import {
  ADD_TASK,
  CHANGE_THEME,
  CHANGE_VALUE,
  COMPLETE_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  UPGRADE_TASK,
} from "../constant/TodoListContant";

const defaultState = {
  theme: TodoListDarkTheme,
  arrThemes: [
    { id: 1, name: "Dark Theme", theme: TodoListDarkTheme },
    { id: 2, name: "Light Theme", theme: TodoListLightTheme },
    { id: 3, name: "Primary Theme", theme: TodoListPrimaryTheme },
  ],
  taskList: [
    { id: 1, name: "Task 1", done: true },
    { id: 2, name: "Task 2", done: true },
    { id: 3, name: "Task 3", done: false },
  ],
  taskName: "",
  taskEdit: { id: 4, name: "Edit Task", done: false },
};

export const TodoListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "test": {
      console.log("abc");
      return { ...state };
    }

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

    case CHANGE_VALUE: {
      const { value } = action.e.target;
      state.taskName = value;
      console.log(state.taskName);
      return { ...state };
    }
    case ADD_TASK: {
      const taskListUpdate = [...state.taskList];
      taskListUpdate.push(action.newTask);
      // state.taskList = taskListUpdate;
      if (action.newTask.name === "") {
        alert("Moi ban nhap task");
        return { ...state };
      }
      console.log(...state);
      return { ...state, taskList: taskListUpdate };
    }
    case REMOVE_TASK: {
      let taskListUpdate = [...state.taskList];
      taskListUpdate = taskListUpdate.filter((task) => {
        return task.id !== action.id;
      });
      return {
        ...state,
        taskList: taskListUpdate,
      };
    }
    case COMPLETE_TASK: {
      const taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.id);
      if (index !== -1) {
        taskListUpdate[index].done = false;
      }
      return { ...state, taskList: taskListUpdate };
    }
    case EDIT_TASK: {
      // const taskListUpdate = [...state.taskList];
      // let index = taskListUpdate.findIndex((task) => task.id === action.id);
      // state.taskEdit={...state.taskList}
      // if (index !== -1) {
      //   state.taskName = taskListUpdate[index].name;
      // }
      state.taskName = action.task.name;
      return { ...state, taskEdit: action.task };
    }
    case UPGRADE_TASK: {
      console.log(action.taskName);
      // state.taskName = action.taskName;
      const taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.id === state.taskEdit.id
      );
      if (index !== -1) {
        taskListUpdate[index].name = action.taskName;
      }

      return { ...state, taskList: taskListUpdate };
    }
    default:
      return { ...state };
  }
};
