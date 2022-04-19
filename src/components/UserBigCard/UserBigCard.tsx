import React from 'react'

import { Button } from '../Button/Button'

import { TUser } from '../../const/type'

import s from './UserBigCard.module.scss'

interface TItem {
  item: TUser
}

const UserBigCard = ({ item }: TItem) => {
  return (
    <section className={s.user}>
      <div className={s.user__info}>
        <label className={s.user__text}>Name</label>
        <label className={s.user__text}>User name</label>
        <label className={s.user__text}>E-mail</label>
        <label className={s.user__text}>Street</label>
        <label className={s.user__text}>City</label>
        <label className={s.user__text}>Zip code</label>
        <label className={s.user__text}>Phone</label>
        <label className={s.user__text}>Website</label>
        <label className={s.user__text}>Comment</label>
      </div>
      <Button disabled={true} customClassName={s.user__button}>
        Отправить
      </Button>
    </section>
  )
}

export default UserBigCard
