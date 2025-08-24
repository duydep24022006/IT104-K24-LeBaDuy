import React, { Component, ChangeEvent, FormEvent } from "react";
import type { Todo } from "../TodoListIndex";

interface AddTodoFormProps {
  onAdd: (name: string) => boolean;
  onUpdate: (name: string) => boolean;
  editingTodo?: Todo;
}

interface AddTodoFormState {
  inputValue: string;
}

export default class AddTodoForm extends Component<
  AddTodoFormProps,
  AddTodoFormState
> {
  constructor(props: AddTodoFormProps) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  componentDidUpdate(prevProps: AddTodoFormProps) {
    if (
      this.props.editingTodo &&
      this.props.editingTodo !== prevProps.editingTodo
    ) {
      this.setState({ inputValue: this.props.editingTodo.name });
    }
    if (!this.props.editingTodo && prevProps.editingTodo) {
      this.setState({ inputValue: "" });
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { editingTodo, onAdd, onUpdate } = this.props;
    const { inputValue } = this.state;

    const ok = editingTodo ? onUpdate(inputValue) : onAdd(inputValue);
    if (ok) {
      this.setState({ inputValue: "" });
    }
  };

  render() {
    const isEditing = !!this.props.editingTodo;

    return (
      <>
        <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active">Tất cả công việc</a>
          </li>
        </ul>

        <form
          className="d-flex justify-content-center align-items-center mb-4"
          onSubmit={this.handleSubmit}
        >
          <div className="form-outline flex-fill">
            <input
              type="text"
              id="todo-input"
              className="form-control"
              value={this.state.inputValue}
              onChange={this.handleChange}
              placeholder="Nhập tên công việc"
            />
            <label className="form-label" htmlFor="todo-input">
              {isEditing ? "Cập nhật công việc" : "Thêm công việc"}
            </label>
          </div>
          <button type="submit" className="btn btn-info ms-2">
            {isEditing ? "Cập nhật" : "Thêm"}
          </button>
        </form>
      </>
    );
  }
}
