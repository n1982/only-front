import { createGlobalStyle } from 'styled-components';

import HelveticaNeueCyrRomanWoff from './HelveticaNeueCyr-Roman.woff';
import HelveticaNeueCyrRomanWoff2 from './HelveticaNeueCyr-Roman.woff2';
import HelveticaNeueCyrBoldWoff2 from './HelveticaNeueCyr-Bold.woff';
import HelveticaNeueCyrBoldWoff from './HelveticaNeueCyr-Bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'HelveticaNeueCyr';
        src: local('HelveticaNeueCyr'), local('HelveticaNeueCyr'),
        url(${HelveticaNeueCyrRomanWoff2}) format('woff2'),
        url(${HelveticaNeueCyrRomanWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
   @font-face {
    font-family: 'HelveticaNeueCyr';
    src: local('HelveticaNeueCyr-Bold'),
         url(${HelveticaNeueCyrBoldWoff2}) format('woff2'),
        url(${HelveticaNeueCyrBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
}
`;
