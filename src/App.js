import React from "react";
import Header from "./Header";
import AddForm from "./AddForm";
import { Title } from "./Components";
import BaseLayout from "./BaseLayout";
import ListItem from "./ListItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: "Have to cooks" },
        { id: 2, title: "Have to eat" },
      ],
    };
  }

  addHandler = (value) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { title: value, id: this.state.todos.length + 1 },
      ],
    });
  };

  render() {
    return (
      <BaseLayout>
        <Header>
          <Title class="text-6xl text-red-500 font-bold tracking-wider text-center">
            Todo List
          </Title>
        </Header>
        <AddForm
          className="container lg:w-1/2 flex flex-col mx-auto mt-10"
          addHandler={this.addHandler}
        />
        <ListItem todos={this.state.todos} />
      </BaseLayout>
    );
  }
}

export default App;
