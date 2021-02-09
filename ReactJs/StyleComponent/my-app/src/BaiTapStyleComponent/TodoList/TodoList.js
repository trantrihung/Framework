import React, { Component } from "react";
import { Container } from "../ComponentTodoList/Container";
import { ThemeProvider } from "styled-components";
import { Dropdown } from "../ComponentTodoList/Dropdown";
import { Heading1, Heading3 } from "../ComponentTodoList/Heading";
import { TodoListDarkTheme } from "../Theme/TodoListDarkTheme";
import { TodoListLightTheme } from "../Theme/TodoListLightTheme";
import { TodoListPrimaryTheme } from "../Theme/TodoListPrimaryTheme";
import { Button } from "../ComponentTodoList/Button";
import { Table, Th, Tr, Thead, Tbody } from "../ComponentTodoList/Table";
import { connect } from "react-redux";
import {
  changeThemeAction,
  changeValueAction,
  addTaskAction,
  removeAction,
  completeAction,
  editTaskAction,
  upGradeTaskAction,
} from "../redux/action/TodoListAction";

class TodoList extends Component {
  state = {
    taskValue: "",
  };
  renderOption = () => {
    const { arrThemes } = this.props;
    return arrThemes.map((themes) => {
      return (
        <option key={themes.id} value={themes.id}>
          {themes.name}
        </option>
      );
    });
  };
  render() {
    const { taskName } = this.props;
    // console.log(taskName);
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>
          <Dropdown onChange={this.props.changeTheme}>
            {this.renderOption()}
          </Dropdown>
          <Heading1>Todo List</Heading1>
          <label>Task name</label>
          <div>
            <input
              value={this.props.taskName}
              onChange={this.props.changeValue}
              style={{ width: "70%" }}
            />
            <Button onClick={() => this.props.addTask(taskName)}>
              Add task
            </Button>
            <Button onClick={() => this.props.upgradeTask(taskName)}>
              Update task
            </Button>
          </div>
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>
              {this.props.taskList
                .filter((item) => item.done)
                .map((task) => {
                  return (
                    <Tr key={task.id}>
                      <Th>{task.name}</Th>
                      <Th className="text-right">
                        <Button onClick={() => this.props.editTask(task)}>
                          <i className="fa fa-edit"></i>
                        </Button>
                        <Button
                          onClick={() => this.props.completeTask(task.id)}
                        >
                          <i className="fa fa-check"></i>
                        </Button>
                        <Button onClick={() => this.props.removeTask(task.id)}>
                          <i className="fa fa-trash-alt"></i>
                        </Button>
                      </Th>
                    </Tr>
                  );
                })}
            </Thead>
          </Table>
          <Heading3>Task Complete</Heading3>
          <Table>
            <Thead>
              {this.props.taskList
                .filter((item) => !item.done)
                .map((task) => {
                  return (
                    <Tr key={task.id}>
                      <Th>{task.name}</Th>
                      <Th className="text-right">
                        <Button onClick={() => this.props.removeTask(task.id)}>
                          <i className="fa fa-trash-alt"></i>
                        </Button>
                      </Th>
                    </Tr>
                  );
                })}
            </Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.props.test();
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    test: () => {
      dispatch({
        type: "test",
      });
    },
    changeTheme: (e) => {
      dispatch(changeThemeAction(e));
    },
    changeValue: (e) => {
      dispatch(changeValueAction(e));
    },
    addTask: (taskName) => {
      let newTask = {
        id: Date.now(),
        name: taskName,
        done: true,
      };
      dispatch(addTaskAction(newTask));
    },
    removeTask: (id) => {
      dispatch(removeAction(id));
    },
    completeTask: (id) => {
      dispatch(completeAction(id));
    },
    editTask: (task) => {
      dispatch(editTaskAction(task));
    },
    upgradeTask: (taskName) => {
      dispatch(upGradeTaskAction(taskName));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    arrThemes: state.TodoListReducer.arrThemes,
    theme: state.TodoListReducer.theme,
    taskList: state.TodoListReducer.taskList,
    taskName: state.TodoListReducer.taskName,
    taskEdit: state.TodoListReducer.taskEdit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
