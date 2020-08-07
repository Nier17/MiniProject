import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Task from './Task';

class Tasks extends Component {
    render() {
        ///SE LE PASAN LAS TAREAS DE APP AL COMPONENTE TASKS
        return this.props.tasks.map(task => <Task task = {task} key = {task.id} />);
          
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

const obj = {
    "id": 0,
        "title": "task vv",
        "description": "lorem ipsum 1",
        "done": false
}
export default Tasks;