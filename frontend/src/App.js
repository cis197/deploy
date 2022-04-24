import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [users, setUsers] = useState([])

  const createUser = async () => {
    await axios.post('/account/create', { username, password })
    setMsg('user createion successful')
  }

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get('/account/query')
      setUsers(data)
      // console.log(users)
    }

    getUsers()
  }, [])

  return (
    <>
      Username: <input onChange={e => setUsername(e.target.value)} />
      <br />
      Password: <input onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={() => createUser()}> Submit </button>
      <br />
      <p> {msg} </p>
      <br/>
      <h1> LIST OF REGISTERED USERS </h1> 
      {users.map(user => <p>{user.username}</p>)}
    </>
  )
}