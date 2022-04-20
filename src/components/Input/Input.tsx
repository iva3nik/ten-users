import React from 'react'

import s from './Input.module.scss'

interface TProps {
  value: string
  type: string
}

const Input = ({ value, type }: TProps) => {
  return <input className={s.input} value={value} type={type} readOnly />
}

export default Input
