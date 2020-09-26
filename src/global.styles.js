import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');


body {
  font-family: 'Alata', sans-serif;
  padding: 20px 40px;
  overflow-x: hidden;

  @media screen and (max-width: 800px){
      padding: 10px
  }

}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
  
}

`;
