import { theme } from 'src/globalLayout/GlobalStyle';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import PretendardWoff2 from './PretendardVariable.woff2';

export default createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'Pretendard';
        src: url('../fonts/PretendardVariable.woff2') format('woff2');
    }
    body {
        font-family: 'Pretendard', sans-serif; 
        background-color: ${theme.color.bgc1};
    }
    a{color:inherit; text-decoration:none;}
`;
