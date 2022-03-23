import React, { useState, useEffect } from 'react';
import { fetchTasks } from './api';
import './App.css';


function App() {
  const [value, setValue] = useState("")
  const [tasks, setTasks] = useState([])
  const [loader, setLoader] = useState(false)

  console.count('App se renderiza')

  useEffect(() => {
    setLoader(true);
    const timeoutId = setTimeout(() => {
      console.log('Este proceso pasas despues de 5 segundos')
      fetchTasks()
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
    console.log('Agrega la tarea ', value);
    setTasks(tasks.concat({
      _id: "6233f2a9e7e80ebdb3e475ac" + Math.floor(Math.random() * 10),
      text: value
    }))
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="task-input__container">
          <div className="task-input">
            <input 
              type="text" 
              className="task-input__text"
              value={value}
              placeholder="Ingresa la tarea"
              onChange={(e) => {
                setValue(e.target.value);
              }}    
            />
          </div>
          <button 
            onClick={addTask} 
            className="task-input__btn"
          >
            Ingresar Tarea
          </button>
        </div>
        {loader && (<p style={{ color: 'white' }}>Loading...</p>)}
        {tasks.map((task) => {
          return (
            <div key={task._id} className="task">
              <p>{task.text}</p>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
