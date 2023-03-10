export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  icon?: JSX.Element
  name: string
  register?: any
  error: boolean
}
