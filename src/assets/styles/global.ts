import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

 *{
  padding:0;
  margin:0;
  outline:0;
  box-sizing: border-box;
 }

 html, body,#app{
  height:100%;
 }


 button{
  cursor: pointer;
 }

 h1, h2, h3, h4, h5, h6{
  font-size:2.5rem;
 }

 a{
  text-decoration: none;
 }

 ul{
  list-style: none;
 }
`
