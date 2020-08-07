import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Task.css';


class Task extends Component {

    styleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'blue' : 'green',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    styleDelete() {
        return {
            fontSize: '18px',
            background: '#ea2027',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: this.props.task.done ? '50%' : '1%',
            cursor: 'pointer'
        }
        
    }

    render() {
        const { task } = this.props;
        const redColor = {background: 'red'}
        return <p style = {this.styleCompleted()}>
        {task.title} - 
        {task.description} - 
        {task.done} - 
        {task.id} 
        <input type="checkbox" />
        <button style={btnDelete}>
            x
        </button>
        </p>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '100%',
    cursor: 'pointer'
}



export default Task;