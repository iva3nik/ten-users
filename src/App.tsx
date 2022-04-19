import React, { useState, useEffect } from 'react'

import SideBar from './components/SideBar/SideBar'
import ListUsers from './components/ListUsers/ListUsers'

import * as main from './utils/MainApi'

import s from './App.module.scss'

function App() {
  const [listUsers, setListUsers] = useState([])
  const [countUsers, setCountUsers] = useState(0)

  useEffect(() => {
    main
      .getUsers()
      .then((users) => {
        setListUsers(users)
        setCountUsers(users.length)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={s.app}>
      <SideBar />
      <ListUsers listUsers={listUsers} countUsers={countUsers} />
    </div>
  )
}

export default App
