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

class TodoList extends Component {
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
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>
          <Dropdown onChange={this.props.changeTheme}>
            {this.renderOption()}
          </Dropdown>
          <Heading1>Todo List</Heading1>
          <label>Task name</label>
          <div>
            <input style={{ width: "70%" }} />
            <Button>Add task</Button>
            <Button>Update task</Button>
          </div>
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th>Task name</Th>
                <Th className="text-right">
                  <Button>
                    <i className="fa fa-edit"></i>
                  </Button>
                  <Button>
                    <i className="fa fa-check"></i>
                  </Button>
                  <Button>
                    <i className="fa fa-trash-alt"></i>
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th>Task name</Th>
                <Th className="text-right">
                  <Button>
                    <i className="fa fa-edit"></i>
                  </Button>
                  <Button>
                    <i className="fa fa-check"></i>
                  </Button>
                  <Button>
                    <i className="fa fa-trash-alt"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
          <Heading3>Task Complete</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th>Task name</Th>
                <Th className="text-right">
                  <Button>
                    <i className="fa fa-trash-alt"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrThemes: state.TodoListReducer.arrThemes,
    theme: state.TodoListReducer.theme,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (e) => {
      dispatch({
        type: "CHANGE_THEME",
        e,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
