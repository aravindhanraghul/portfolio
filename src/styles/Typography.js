import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Fantasy';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Fantasy';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Fantasy';
    src: url(${MontserratBold});
    font-style: normal;
  }
  html{
    font-family: 'Fantasy';
    color: black;
  }
  *{
    font-family: 'Fantasy';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Fantasy'
  }

`;

export default Typography;
