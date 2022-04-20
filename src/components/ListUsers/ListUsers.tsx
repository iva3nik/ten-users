import React from 'react'

import UserCard from '../UserCard/UserCard'
import Preloader from '../Preloader/Preloader'

import { TUser } from '../../const/type'

import s from './ListUsers.module.scss'

interface TProps {
  listUsers: Array<TUser>
  countUsers: number
  isLoading: boolean
  handleSetUser: (user: TUser) => void
}

const ListUsers = ({ listUsers, countUsers, isLoading, handleSetUser }: TProps): React.ReactElement => {
  return (
    <main className={s.users}>
      <h2 className={s.users__title}>Список пользователей</h2>
      {isLoading && <Preloader />}
      {listUsers &&
        listUsers.map((user: TUser) => (
          <div className={s.users__user} key={user.id}>
            <UserCard item={user} handleSetUser={handleSetUser} />
          </div>
        ))}
      {!isLoading && <p className={s.users__count}>Найдено {countUsers} пользователей</p>}
    </main>
  )
}

export default ListUsers
