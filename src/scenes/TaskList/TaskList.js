import React, { useState, useEffect } from 'react';
import { fetchTasks, createTask, deleteTask } from '../../api';
import './TaskList.css';
import Button from '../../components/Button';
import Task from '../../components/Task';
import TextInput from '../../components/TextInput/TextInput';

function TaskList({ user }) { // TODO: Recibir el token como props
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState([])
  const [loader, setLoader] = useState(false)

  // console.count('App se renderiza')

  useEffect(() => {
    setLoader(true);
    const timeoutId = setTimeout(() => {
      console.log('Este proceso pasas despues de 5 segundos')
      fetchTasks() // TODO: MANDAR TOKEN
        .then((res) => {
          setTasks(res.data)
          setLoader(false);
        })
        .catch((err) => {
          console.error(err)
        })
    }, 5000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const addTask = () => {
    createTask(taskText) // TODO: Mandar token
    .then((res) => {
      const createdTask = res.data;
      setTasks(tasks.concat(createdTask))
      setTaskText('')
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const onDeleteTask = (id) => {
    deleteTask(id)
    .then((res) => {
      const deltedTask = res.data
      setTasks(tasks.filter((t) => t._id !== id))
    })
    .catch((error) => {
      console.error(error)
    })
  } 

  return (
    <div className='task-list'>
      <h2 style={{ color: 'white' }}>Bienvenide {user}</h2>
      <div className="task-input__container">
        <TextInput 
          value={taskText} 
          placeholder="Ingresa una tarea"
          type="text"
          onChange={(e) => setTaskText(e.target.value)}   
        />
        <Button 
          className="task-input__btn" 
          onClick={addTask}
        >Borrar tarea</Button>
      </div>
      {loader && (<p style={{ color: 'white' }}>Loading...</p>)}
      {tasks.map((task) => (
        <Task key={task._id} text={task.text} onDelete={() => onDeleteTask(task._id)} />
      )).reverse()}
    </div>
  )
}

export default TaskList;
