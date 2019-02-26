import React from 'react';

const todoList = (props) => {

    return props.items.map((item, index)=>
        (
        <li key={index}>
                {item}
        </li>
        )
    )

}

export default todoList;