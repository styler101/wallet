import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.common?.spacing.sm} 0;

  span {
    color: ${({ theme }) => theme.colors.warning};
  }
`
