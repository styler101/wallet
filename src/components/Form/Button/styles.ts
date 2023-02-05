import styled from 'styled-components'

type Props = {
  buttonType: 'success' | 'danger'
}
export const Container = styled.button<Props>`
  height: 2.625rem;
  width: 100%;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: ${({ theme }) => theme.common.spacing.xs};
  background-color: ${(props) =>
    props.buttonType === 'success'
      ? props.theme.colors.primary
      : props.theme.colors.warning};

  &:hover {
    opacity: 0.9;
  }
`
