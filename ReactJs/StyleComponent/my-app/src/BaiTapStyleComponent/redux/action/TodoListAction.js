import {
  ADD_TASK,
  CHANGE_THEME,
  CHANGE_VALUE,
  COMPLETE_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  UPGRADE_TASK,
} from "../constant/TodoListContant";

export const changeThemeAction = (e) => {
  return {
    type: CHANGE_THEME,
    e,
  };
};

export const changeValueAction = (e) => {
  return {
    type: CHANGE_VALUE,
    e,
  };
};

export const addTaskAction = (newTask) => {
  return {
    type: ADD_TASK,
    newTask,
  };
};

export const removeAction = (id) => {
  return {
    type: REMOVE_TASK,
    id,
  };
};
export const completeAction = (id) => {
  return {
    type: COMPLETE_TASK,
    id,
  };
};
export const editTaskAction = (task) => {
  return {
    type: EDIT_TASK,
    task,
  };
};
export const upGradeTaskAction = (taskName) => {
  return {
    type: UPGRADE_TASK,
    taskName,
  };
};
