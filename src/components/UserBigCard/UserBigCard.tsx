import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { Button } from '../Button/Button'

import { TUser } from '../../const/type'
import useFormWithValidation from '../../hooks/useFormAndValidation'

import s from './UserBigCard.module.scss'

interface TItem {
  item: TUser
  readonly: boolean
  turnonReadonly: () => void
  handleSetUser: (user: TUser) => void
}

const UserBigCard = ({ item, readonly, turnonReadonly, handleSetUser }: TItem) => {
  const { values, handleChange, isValid } = useFormWithValidation()

  const {
    name = item.name,
    username = item.username,
    email = item.email,
    street = item.address.street,
    city = item.address.city,
    zipcode = item.address.zipcode,
    phone = item.phone,
    website = item.website,
    comment = item.comment,
  }: any = values

  const hadnleSubmit = (e: any) => {
    e.preventDefault()
    const data = {
      address: {
        city: city,
        street: street,
        zipcode: zipcode,
      },
      company: { name: item.company.name },
      id: item.id,
      email: email,
      name: name,
      phone: phone,
      username: username,
      website: website,
      comment: comment && comment,
    }
    isValid && handleSetUser(data)
    console.log('edited user: ', JSON.stringify(data))
    turnonReadonly()
  }

  return (
    <>
      <form className={s.user} onSubmit={hadnleSubmit}>
        <div className={s.user__info}>
          <label className={s.user__text}>
            Name
            <input
              className={cn(s.user__input, { [s.user__input_readonly]: readonly })}
              required
              name='name'
              type='text'
              onChange={handleChange}
              value={name || ''}
              disabled={readonly}
            />
          </label>

          <label className={s.user__text}>
            User name
            <input
              className={cn(s.user__input, { [s.user__input_readonly]: readonly })}
              required
              name='username'
              type='text'
              onChange={handleChange}
              value={username || ''}
              disabled={readonly}
            />
          </label>

          <label className={s.user__text}>
            E-mail
            <input
              className={cn(s.user__input, { [s.user__input_readonly]: readonly })}
              required
              name='email'
              type='email'
              onChange={handleChange}
              value={email || ''}
              disabled={readonly}
            />
          </label>

          <label className={s.user__text}>
            Street
            <input
              className={cn(s.user__input, { [s.user__input_readonly]: readonly })}
              required
              name='street'
              type='text'
              onChange={handleChange}
              value={street || ''}
              disabled={readonly}
            />
          </label>

          <label className={s.user__text}>
            City
            <input
              className={cn(s.user__input, { [s.user__input_readonly]: readonly })}
              required
              name='city'
              type='text'
              onChange={handleChange}
              value={city || ''}
              disabled={readonly}
            />
          </label>

          <label className={s.user__text}>
            Zip code
            <input
              className={cn(s.user__input, { [s.user__input_readonly]: readonly })}
              required
              name='zipcode'
              type='text'
              onChange={handleChange}
              value={zipcode || ''}
              disabled={readonly}
            />
          </label>

          <label className={s.user__text}>
            Phone
            <input
              className={cn(s.user__input, { [s.user__input_readonly]: readonly })}
              required
              name='phone'
              type='text'
              onChange={handleChange}
              value={phone || ''}
              disabled={readonly}
            />
          </label>

          <label className={s.user__text}>
            Website
            <input
              className={cn(s.user__input, { [s.user__input_readonly]: readonly })}
              required
              name='website'
              type='text'
              onChange={handleChange}
              value={website || ''}
              disabled={readonly}
            />
          </label>

          <label className={s.user__text}>
            Comment
            <textarea
              className={s.user__textarea}
              name='comment'
              disabled={readonly}
              onChange={handleChange}
              value={comment || ''}
            />
          </label>
        </div>
        <Button disabled={isValid && !readonly ? false : true} customClassName={s.user__button} buttonType='submit'>
          Отправить
        </Button>
      </form>
      <Link className={s.link} to='/'>
        Вернуться на главную
      </Link>
    </>
  )
}

export default UserBigCard
