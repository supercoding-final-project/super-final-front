import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import PretendardWoff2 from './PretendardVariable.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url(${PretendardWoff2}) format('woff2');
    }
    body {
        font-family: 'Pretendard', sans-serif; 
    }

    ${reset}

    
`;
