import React from "react";
import { Button, TextInput } from "./Components";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  onChangeText = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  onClickHandler = (e) => {
    e.preventDefault();

    if (this.state.inputValue.length > 3) {
      this.props.addHandler(this.state.inputValue);
      this.setState({ inputValue: "" });
    } else {
      window.alert("Task must be above 3 characters.");
    }
  };

  render() {
    return (
      <form onSubmit={this.onClickHandler} className={this.props.className}>
        <TextInput
          className="border p-4 bg-slate-300 rounded-lg"
          placeholder="Enter New Task"
          value={this.state.inputValue}
          onChangeText={this.onChangeText}
        />
        <Button
          className="bg-red-500 rounded-lg text-white shadow-md p-3 px-5 my-5 self-center active:bg-red-700"
          title="Add Task"
          onClick={this.onClickHandler}
        />
      </form>
    );
  }
}

export default AddForm;
