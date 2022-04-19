import React from 'react'

import User from '../User/User'

import s from './ListUsers.module.scss'

import { TUser } from '../../const/type'

const ListUsers: React.FC = () => {
  return (
    <main className={s.users}>
      <h2 className={s.users__title}>Список пользователей</h2>
      <div className={s.users__user}>
        <User />
      </div>
    </main>
  )
}

export default ListUsers
