import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors?.gray};
    font-weight: 400;
  }

  svg {
    margin-left: ${({ theme }) => theme.common?.spacing.sm};
  }
`
