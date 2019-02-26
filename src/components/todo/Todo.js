import React, { Component } from 'react';
import TodoList from './TodoList';

class Todo extends Component {

    state = {
        items:["Milk", "Butter", "Cheese"],
        item:null
    }

    add = () =>{
        let newItems = [...this.state.items];
        newItems.push(this.state.item);
        this.setState(
            {
                items:newItems,
                item:""
            }
        )
    }

    handleChange = (event) => {

        this.setState(
            {
                item:event.target.value
            }
        )

    }

    render() {
        return (
            <div>
                <h1>To-Do List</h1>           
				<input onChange={this.handleChange} value={this.state.item} name="item" type="text"/>
                <button onClick={this.add}>add</button>
                <TodoList items={this.state.items}/>
            </div>
        );
    }
}

export default Todo;