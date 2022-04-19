import React from 'react'

import s from './User.module.scss'

const User: React.FC = () => {
  return (
    <section className={s.user}>
      <div className={s.user__info}>
        <p className={s.user__text}>
          <span>ФИО:</span>Иван Иванов
        </p>
        <p className={s.user__text}>
          <span>город:</span>Москва
        </p>
        <p className={s.user__text}>
          <span>компания:</span>ООО "Пример"
        </p>
      </div>
      <button className={s.user__button} type='button'>
        Подробнее
      </button>
    </section>
  )
}

export default User
