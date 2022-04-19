import React from 'react'

import SideBar from './components/SideBar/SideBar'
import ListUsers from './components/ListUsers/ListUsers'

import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <SideBar />
      <ListUsers />
    </div>
  )
}

export default App
