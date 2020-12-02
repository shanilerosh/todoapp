import {Component} from "react";

class AddToDo extends Component {
    state = {
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({content:''})
    }

    handleInput = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Activity</label>
                    <input type="text" onChange={this.handleInput} value={this.state.content}/>
                </form>
            </div>
        );
    }
}

export default AddToDo;
