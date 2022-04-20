import React, { useState } from 'react'

import UserBigCard from '../UserBigCard/UserBigCard'
import { Button } from '../Button/Button'

import { TUser } from '../../const/type'

import s from './UserPage.module.scss'

interface TProps {
  user: TUser
  handleSetUser: (user: TUser) => void
}

const UserPage = ({ user, handleSetUser }: TProps): React.ReactElement => {
  const [readonly, setReadonly] = useState(true)

  const turnoffReadonly = () => setReadonly(false)
  const turnonReadonly = () => setReadonly(true)

  return (
    <section className={s.user}>
      <div className={s.user__line}>
        <h2 className={s.user__title}>Профиль пользователя</h2>
        <Button onClick={turnoffReadonly}>Редактировать</Button>
      </div>
      <UserBigCard item={user} readonly={readonly} turnonReadonly={turnonReadonly} handleSetUser={handleSetUser} />
    </section>
  )
}

export default UserPage
