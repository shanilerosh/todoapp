import {Component} from "react";
import ToDo from "./ToDo";

class App extends Component {
  state = {
      toDos : [
          {id:1,content: 'Buy milk'},
          {id:2,content: 'Buy Groce'}
      ]
  }

    deleteItem = (id) => {
      let toDos = this.state.toDos.filter(item=> {
          return id!==item.id;
      });

      this.setState({
          toDos
      })
    }

    render() {
    return (
        <div className="App container">
        <h1 className="blue-text center">To Do's</h1>
        <ToDo listOfDo={this.state.toDos} deleteItem={this.deleteItem} />
        </div>
    );
  }
}

export default App;
