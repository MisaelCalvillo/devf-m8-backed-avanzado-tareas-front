import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_TASKS_API_URL;

export const login = (email, password) => {
  return axios.post('/api/users/login', {
    email,
    password
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const signUp = ({ name, email, password }) => {
  return axios.post('/api/users', {
    name,
    email,
    password
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const fetchTasks = (token) => {
  return axios.get('/api/tareas', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export const createTask = (text, token) => {
  return axios.post('/api/tareas', { text }, 
  {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}

export const deleteTask = (id, token) => {
  return axios.delete(`/api/tareas/${id}`, 
  {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
