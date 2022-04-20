import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import SideBar from './components/SideBar/SideBar'
import ListUsers from './components/ListUsers/ListUsers'
import UserPage from './components/UserPage/UserPage'

import * as main from './utils/MainApi'

import s from './App.module.scss'
import { TUser } from './const/type'

function App() {
  const [listUsers, setListUsers] = useState([])
  const [countUsers, setCountUsers] = useState(0)
  const [typeSort, setTypeSort] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<null | TUser>(null)
  const navigate = useNavigate()

  const sortList = () => {
    if (typeSort === 'по городу') {
      setListUsers(
        [...listUsers].sort((a: TUser, b: TUser) => {
          if (a.address.city.toLowerCase() < b.address.city.toLowerCase()) {
            return -1
          }
          if (a.address.city.toLowerCase() > b.address.city.toLowerCase()) {
            return 1
          }
          return 0
        }),
      )
    }

    if (typeSort === 'по компании') {
      setListUsers(
        [...listUsers].sort((a: TUser, b: TUser) => {
          if (a.company.name.toLowerCase() < b.company.name.toLowerCase()) {
            return -1
          }
          if (a.company.name.toLowerCase() > b.company.name.toLowerCase()) {
            return 1
          }
          return 0
        }),
      )
    }
  }

  const handleSetUser = (user: TUser) => setUser(user)

  useEffect(() => {
    sortList()
  }, [typeSort])

  const handleTypeSort = (type: string) => setTypeSort(type)

  useEffect(() => {
    navigate('/')
    setIsLoading(true)
    main
      .getUsers()
      .then((users) => {
        setListUsers(users)
        setCountUsers(users.length)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className={s.app}>
      <SideBar handleTypeSort={handleTypeSort} />
      <Routes>
        <Route
          path='/'
          element={
            <ListUsers
              listUsers={listUsers}
              countUsers={countUsers}
              isLoading={isLoading}
              handleSetUser={handleSetUser}
            />
          }
        />
        {user && <Route path={`/user/:${user?.id}`} element={<UserPage user={user} />} />}
      </Routes>
    </div>
  )
}

export default App
