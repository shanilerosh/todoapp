import {Component} from "react";
import ToDo from "./ToDo";
import AddToDo from "./AddToDo";


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

    addTaskToList = (item) => {
        item.id = Math.random();
        let toDos = [...this.state.toDos,item];
        toDos.reverse();
        this.setState({
            toDos
        })

    }

    render() {
    return (
        <div className="App container">
        <h1 className="blue-text center">To Do's</h1>
            <AddToDo addTask={this.addTaskToList}/>
        <ToDo listOfDo={this.state.toDos} deleteItem={this.deleteItem} />
        </div>
    );
  }
}

export default App;
