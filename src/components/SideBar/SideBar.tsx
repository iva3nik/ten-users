import React from 'react'

import { Button } from '../Button/Button'

import { TSort } from '../../const/type'

import s from './SideBar.module.scss'

interface TProps {
  handleTypeSort: (type: string) => void
}

const buttonsSort: Array<TSort> = [{ title: 'по городу' }, { title: 'по компании' }]

const SideBar = ({ handleTypeSort }: TProps) => {
  return (
    <aside className={s.aside}>
      <h2 className={s.aside__title}>Сортировка</h2>
      {buttonsSort.map((button, index) => (
        <Button
          onClick={() => handleTypeSort(button.title)}
          key={button.title + index}
          customClassName={s.aside__button}
        >
          {button.title}
        </Button>
      ))}
    </aside>
  )
}

export default SideBar
