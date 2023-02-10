import { keyframes } from 'styled-components'

export const shadeDown = keyframes`
 0%{
  transform: translateY(-80px);
  opacity: 0.5;
 }

 100%{
  transform: translateY(0);
  opacity: 1;
 }
`

export const shadeLeft = keyframes`
 0%{
  transform: translateX(-80px);
  opacity: 0;
 }

 50%{
  transform: translateX(-80px);
  opacity: 0;
 }

 70%{
  transform: translateX(-80px);
  opacity: 0.5;
 }

 100%{
  transform: translateX(0);
  opacity: 1;
 }
`
