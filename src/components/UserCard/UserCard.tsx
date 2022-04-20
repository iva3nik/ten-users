import React from 'react'
import { Link } from 'react-router-dom'

import s from './UserCard.module.scss'

import { TUser } from '../../const/type'

interface TItem {
  item: TUser
  handleSetUser: (user: TUser) => void
}

const UserCard = ({ item, handleSetUser }: TItem) => {
  return (
    <section className={s.user}>
      <div className={s.user__info}>
        <p className={s.user__text}>
          <span>ФИО:</span>
          {item.name}
        </p>
        <p className={s.user__text}>
          <span>город:</span>
          {item.address.city}
        </p>
        <p className={s.user__text}>
          <span>компания:</span>
          {item.company.name}
        </p>
      </div>
      <Link to={`/user/${item.id}`} className={s.user__button} type='button' onClick={() => handleSetUser(item)}>
        Подробнее
      </Link>
    </section>
  )
}

export default UserCard
