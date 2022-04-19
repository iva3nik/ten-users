import React from 'react'

import { Button } from '../Button/Button'

import s from './SideBar.module.scss'

export interface TSort {
  title: string
}

const buttonsSort: Array<TSort> = [{ title: 'по городу' }, { title: 'по компании' }]

const SideBar: React.FC = () => {
  return (
    <aside className={s.aside}>
      <h2 className={s.aside__title}>Сортировка</h2>
      {buttonsSort.map((button, index) => (
        <Button key={button.title + index} customClassName={s.aside__button}>
          {button.title}
        </Button>
      ))}
    </aside>
  )
}

export default SideBar
