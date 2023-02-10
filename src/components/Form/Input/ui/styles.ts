import styled, { css } from 'styled-components'

type Props = {
  error: boolean
}
export const Container = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.colors?.white};
    font-weight: 400;
    opacity: 0.7;
    margin-bottom: ${({ theme }) => theme.common?.spacing?.sm};
  }
  div {
    width: 100%;
    position: relative;

    input {
      width: 100%;
      flex-grow: 1;
      height: 2.625rem;
      padding-left: ${({ theme }) => theme.common?.spacing?.xl};
      border-radius: ${({ theme }) => theme.common?.spacing?.xs};
      border: 1px solid #ccc;
      font-size: ${({ theme }) => theme.common?.size?.sm};
      color: ${({ theme }) => theme.colors?.gray};

      &::placeholder {
        color: ${({ theme }) => theme.colors?.gray};
        font-size: ${({ theme }) => theme.common?.size.sm};
        font-family: 'Roboto';
      }
    }

    svg {
      position: absolute;
      top: 14px;
      left: 8px;
      color: #ccc;
    }
  }

  & + div {
    margin-top: ${({ theme }) => theme.common?.spacing.base};
  }

  ${(props) =>
    props.error &&
    css`
      label {
        color: ${({ theme }) => theme.colors?.warning};
      }
      input {
        border: 2px solid ${({ theme }) => theme.colors?.warning} !important;
      }

      svg {
        color: ${({ theme }) => theme.colors?.warning} !important;
      }
    `}
`
