import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    opacity: 0.7;
    margin-bottom: ${({ theme }) => theme.common.spacing.sm};
  }
  div {
    width: 100%;
    position: relative;
    input {
      width: 100%;
      flex-grow: 1;
      height: 2.625rem;
      padding-left: ${({ theme }) => theme.common.spacing?.xl};
      border-radius: ${({ theme }) => theme.common.spacing?.xs};
      border: 1px solid #ccc;
      font-size: ${({ theme }) => theme.common.size?.sm};
      color: ${({ theme }) => theme.colors?.gray};

      &::placeholder {
        color: ${({ theme }) => theme.colors?.gray};
        font-size: ${({ theme }) => theme.common.size?.sm};
        font-family: 'Roboto';
      }
    }

    svg {
      position: absolute;
      top: 14px;
      left: 8px;
    }
  }

  & + div {
    margin-top: ${({ theme }) => theme.common.spacing.base};
  }
`
