import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.125rem;
    height: 3.125rem;
    background-color: ${({ theme }) => theme.colors.warning};
    border-radius: ${({ theme }) => theme.common.spacing.xs};
    svg {
      font-size: ${({ theme }) => theme.common.size.lg};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  h4 {
    margin-top: ${({ theme }) => theme.common.spacing.sm};
    font-size: ${({ theme }) => theme.common.size['2xl']};
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
  }
`
