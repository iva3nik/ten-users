import React from 'react'

import Input from '../Input/Input'
import { Button } from '../Button/Button'

import { TUser } from '../../const/type'

import s from './UserBigCard.module.scss'

interface TItem {
  item: TUser
}

const UserBigCard = ({ item }: TItem) => {
  return (
    <form className={s.user}>
      <div className={s.user__info}>
        <label className={s.user__text}>Name</label>
        <Input value={item.name} type='text' />
        <label className={s.user__text}>User name</label>
        <Input value={item.username} type='text' />
        <label className={s.user__text}>E-mail</label>
        <Input value={item.email} type='email' />
        <label className={s.user__text}>Street</label>
        <Input value={item.address.street} type='text' />
        <label className={s.user__text}>City</label>
        <Input value={item.address.city} type='text' />
        <label className={s.user__text}>Zip code</label>
        <Input value={item.address.zipcode} type='text' />
        <label className={s.user__text}>Phone</label>
        <Input value={item.phone} type='text' />
        <label className={s.user__text}>Website</label>
        <Input value={item.website} type='text' />
        <label className={s.user__text}>Comment</label>
        <textarea className={s.user__textarea} name='textarea' disabled={true} />
      </div>
      <Button disabled={true} customClassName={s.user__button}>
        Отправить
      </Button>
    </form>
  )
}

export default UserBigCard
