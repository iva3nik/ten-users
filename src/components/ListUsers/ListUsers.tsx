import React from 'react'

import User from '../User/User'

import { TUser } from '../../const/type'

import s from './ListUsers.module.scss'

interface TProps {
  listUsers: Array<TUser>
  countUsers: number
}

const ListUsers = ({ listUsers, countUsers }: TProps): React.ReactElement => {
  return (
    <main className={s.users}>
      <h2 className={s.users__title}>Список пользователей</h2>
      {listUsers &&
        listUsers.map((user: TUser) => (
          <div className={s.users__user} key={user.id}>
            <User item={user} />
          </div>
        ))}
      <p className={s.users__count}>Найдено {countUsers} пользователей</p>
    </main>
  )
}

export default ListUsers
