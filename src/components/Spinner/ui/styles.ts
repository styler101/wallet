import styled, { keyframes } from 'styled-components'

type Props = {
  width: number
  height: number
}

const rotation = keyframes`

 from{
  transform: rotate(0);
 }

 to{
  transform: rotate(360deg);
 }
`

export const Container = styled.div<Props>`
  width: ${(props) => (props.width ? `${props.width}px` : '16px')};
  height: ${(props) => (props.height ? `${props.height}px` : '16px')};
  border: 4px solid #ccc;
  border-radius: 50%;
  animation: ${rotation} 1s infinite linear;
  border-left-color: #fff;
`
