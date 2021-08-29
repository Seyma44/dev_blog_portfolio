import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .wb-body {
    background-color: black;
  }
  
  .blog-main {
    min-width: 10vh;
    padding: 15px;
  }
  
  .post-section {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
  
  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top: 30px;
  }
  
  .post-body {
    display: block;
    height: 16rem;
    position: relative;
    border-radius: 1rem;
  }
  
  .post-body img {
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    position: absolute;
    object-fit: cover;
  }
  
  .post-body p {
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    position: absolute;
    object-fit: cover;
    text-align: center;
    margin-top: 30%;
  }
  
  .post-info {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    justify-content: space-between;
    text-align: center;
  }
  
  .post-category {
    background-color: #202020;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    color: whitesmoke;
  }
  
  .post-title {
    background-color: #202020;
    margin: 0;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    color: whitesmoke;
  }
  .hidden {
  display: none;
}
.blog-main a {
   color: #8321bf;
}

`;

export default GlobalStyles;