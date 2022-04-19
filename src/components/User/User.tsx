import React from 'react'

import s from './User.module.scss'

import { TUser } from '../../const/type'

interface TItem {
  item: TUser
}

const User = ({ item }: TItem) => {
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
      <button className={s.user__button} type='button'>
        Подробнее
      </button>
    </section>
  )
}

export default User
