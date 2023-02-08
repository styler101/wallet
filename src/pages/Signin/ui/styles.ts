import styled from 'styled-components'
import { shadeDown } from '@/shared/animations'
import { shade } from 'polished'
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 25rem;
  animation: ${shadeDown} 0.8s ease-in;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.common?.spacing.base};
  background-color: ${({ theme }) => theme.colors?.tertiary};
  padding: ${({ theme }) => theme.common?.spacing.lg};
  border-radius: ${({ theme }) => theme.common?.spacing.xs};

  strong {
    font-size: ${({ theme }) => theme.common?.size['2xl']};
    color: ${({ theme }) => theme.colors?.white};
    border-bottom: 6px solid ${({ theme }) => theme.colors?.warning};
    max-width: 4.15rem;
    padding-bottom: 0.25rem;
  }
`

export const FormFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.common?.spacing.lg} 0;
`

export const ButtonLabel = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors?.white};
  font-size: ${({ theme }) => theme.common?.size.lg};
`

export const SignUpLink = styled.span`
  margin-top: ${({ theme }) => theme.common.spacing?.lg};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors?.white};
  svg {
    margin-right: ${({ theme }) => theme.common.spacing.sm};
  }

  &:hover {
    color: ${shade(0.2, '#fff')};
  }
`
