import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState('')

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/data')
      setData(data)
      // console.log(users)
    }

    getData()
  }, [])

  return (
    <>
      Username: <input onChange={e => setUsername(e.target.value)} />
      <br />
      Password: <input onChange={e => setPassword(e.target.value)} />
      <br />
      <br />
      <br/>
      <h1> LIST OF REGISTERED USERS </h1> 
      {data}
    </>
  )
}