import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

 *{
  padding:0;
  margin:0;
  outline:0;
  box-sizing: border-box;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
 }

 html, body,#root{
  height:100%;
  background-color: ${(props) => props.theme.colors.primary}
 }


 button{
  cursor: pointer;
 }

 a{
  text-decoration: none;
 }

 ul{
  list-style: none;
 }
`
