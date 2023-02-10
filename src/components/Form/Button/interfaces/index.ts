import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  buttonType: 'success' | 'danger'
  loading: boolean
}
