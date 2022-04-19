import React, { ReactElement, ReactNode } from 'react'
import classNames from 'classnames/bind'
import s from './Button.module.scss'

type ButtonType = 'primary' | 'naked' | 'gray' | 'secondary'

export interface ButtonProps {
  type: ButtonType
  children: ReactNode
  buttonType?: 'button' | 'submit'
  fullWidth?: boolean
  disabled?: boolean
  uniqName?: string
  onClick?: () => void
  customClassName?: string
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  fullWidth = true,
  disabled = false,
  uniqName = 'Не указано',
  onClick,
  buttonType = 'button',
  customClassName,
}: ButtonProps): ReactElement => {
  const cx = classNames.bind(s)
  const classes = cx(
    customClassName,
    'button',
    { [`button-${type}`]: !disabled },
    { buttonFullWidth: fullWidth },
    { 'button-disabled': disabled },
  )

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (onClick) {
      event.preventDefault()
      event.stopPropagation()
      onClick()
    }
  }

  return (
    <button type={buttonType} className={classes} disabled={disabled} data-uniq-name={uniqName} onClick={clickHandler}>
      {children}
    </button>
  )
}
