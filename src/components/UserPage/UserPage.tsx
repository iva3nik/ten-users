import React from 'react'

import UserBigCard from '../UserBigCard/UserBigCard'
import { Button } from '../Button/Button'

import { TUser } from '../../const/type'

import s from './UserPage.module.scss'

interface TProps {
  user: TUser
}

const UserPage = ({ user }: TProps): React.ReactElement => {
  return (
    <section className={s.user}>
      <div className={s.user__line}>
        <h2 className={s.user__title}>Профиль пользователя</h2>
        <Button>Редактировать</Button>
      </div>
      <UserBigCard item={user} />
    </section>
  )
}

export default UserPage
