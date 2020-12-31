import React ,{ Component} from 'react';
import {createGlobalStyle} from 'styled-components'
import allColors from './styles/colores'
import Tareas from './components/FormTask'
import Task from './components/tasks'
import {nanoid} from 'nanoid'
const GlobalStyle = createGlobalStyle`
    body{
        font-family: sans-serif;
        background-color:#222;
        color:${allColors.mainColor};
        text-align: center;
        margin:0px; 
    }
`

class App extends Component{


    state = {
        colorSelected:allColors.colors[0],
        tasks: [  // estructura de las tareas
          {
            title: 'aprender firebase',
            color: allColors.colors[0],
            done:false  //atributo que controla si la tarea esta terminada
          }
        ]
    }
 
    handleSubmit = (e) => { 
      e.preventDefault()
      if(e.target.title.value.trim() !== ''){
        this.createNewTask(e.target.title.value)  //creamos nueva tarea
        e.target.title.value = ''   //vaciamos el formulario una vez creada la tarea
      }
    } 

    createNewTask = (title) => {
      const newTask = {
        id:nanoid(),
        title,
        color: this.state.colorSelected,
        done:false
      }

      const allTasks = [...this.state.tasks, newTask]

      this.setState({tasks: allTasks})
    }

    getTask = (id) => {
      const task = this.state.tasks.find(task => task.id === id)
      return task
    }

    handleCompleteTasks = (id) => {
      const currentTasks = this.state.tasks
      const task = this.getTask(id)
      const index = currentTasks.indexOf(task)

      currentTasks[index].done = !currentTasks[index].done

      this.setState({tasks: currentTasks})
    }

    handleDeleteTask = (id) => {
      let currentTasks = this.state.tasks
      currentTasks = currentTasks.filter(task=> task.id !== id)

      this.setState({tasks : currentTasks})
    }

    handleChangeColor = (color) => {
      this.setState({colorSelected: color})   //evento para seleccionar el color
    }

  render() {
    const {colorSelected, tasks} = this.state
    return(
      <>
        <GlobalStyle/>
        <h1>To do list</h1>
        <Tareas handleChangeColor={this.handleChangeColor}
                handleSubmit={this.handleSubmit}
                colorSelected = {colorSelected}
        />

        {this.state.tasks.length === 0 && <h2>not tasks yet</h2>}
      <div>
        {
          tasks.map(task=>(   //mostramos tareas en pantalla
            <Task
                key={nanoid()} 
                done={task.done}
                title={task.title}
                color={task.color}
                handleCompleteTasks={() => this.handleCompleteTasks(task.id)}
                handleDeleteTask={() =>this.handleDeleteTask(task.id)}
            />
          ))
        }
      </div>
      </>
    )
  }
  
}

export default App;
