import React, { ReactElement, ReactNode } from 'react'
import classNames from 'classnames/bind'
import s from './Button.module.scss'

export interface ButtonProps {
  children: ReactNode
  buttonType?: 'button' | 'submit'
  onClick?: () => void
  customClassName?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  buttonType = 'button',
  customClassName,
}: ButtonProps): ReactElement => {
  const cx = classNames.bind(s)
  const classes = cx(customClassName, 'button')

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (onClick) {
      event.preventDefault()
      event.stopPropagation()
      onClick()
    }
  }

  return (
    <button type={buttonType} className={classes} onClick={clickHandler}>
      {children}
    </button>
  )
}
