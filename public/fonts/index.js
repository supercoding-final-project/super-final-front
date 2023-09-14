import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'Pretendard';
        src: url('../fonts/PretendardVariable.woff2') format('woff2');
    }
    body {
        font-family: 'Pretendard', sans-serif; 
    }
`;
