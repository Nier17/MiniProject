import React, {Component} from 'react';
import './App.css';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';

class App extends Component {

   state = {
     tasks: tasks
   } 
  render() {
    return <div>
      {/* le paso las tareas que tengo en state a este componente */}
        <Tasks tasks={this.state.tasks} /> 

    </div>
    
  }
}

export default App;
