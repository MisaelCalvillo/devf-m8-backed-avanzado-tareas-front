import axios from 'axios';

export const fetchTasks = (token) => {
  return axios.get('http://localhost:5001/api/tareas', {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_MONGO_DB_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export const createTask = (text, token) => {
  return axios.post('http://localhost:5001/api/tareas', { text }, 
  {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_MONGO_DB_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
}

export const deleteTask = (id, token) => {
  return axios.delete(`http://localhost:5001/api/tareas/${id}`, 
  {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_MONGO_DB_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
