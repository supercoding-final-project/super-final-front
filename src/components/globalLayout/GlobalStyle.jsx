import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

:root{
  --main-color : rgba(57, 197, 187,1);
  --main-color-100 : rgba(57, 197, 187,.1);
  --main-color-200 : rgba(57, 197, 187,.2);
  --main-color-300 : rgba(57, 197, 187,.3);
  --main-color-400 : rgba(57, 197, 187,.4);
  --main-color-500 : rgba(57, 197, 187,.5);
  --main-color-600 : rgba(57, 197, 187,.6);
  --main-color-700 : rgba(57, 197, 187,.7);
  --main-color-800 : rgba(57, 197, 187,.8);
  --main-color-900 : rgba(57, 197, 187,.9);

  --sub-color : rgba(185, 241, 241,1);

  --main-gray: #f2f2f2;
}

${reset}
`;

export default GlobalStyle;
