export const theme = {
  color: {
    bgc1: '#FCFCFB',
    bgc2: '#FAF9F7',
    bgc3: '#F7F7F3',
    bgc4: '#F5F4EF',
    bgc5: '#F2F1EB',
    grey1: '#0f0f0e',
    grey2: '#333231',
    grey3: '#4d4b4a',
    grey4: '#807e7d',
    grey5: '#CCCBCA',
    point: '#29cc61',
    sub1: '#a7f2c1',
    sub2: '#b9f5cd',
    sub3: '#caf7da',
    sub4: '#dcfae6',
    sub5: '#edfcf3',
    antipode: '#cc2e29',
  },
};

// 사용 예시
// background-color : ${theme.color.red}

export const breakpoints = {
  small: '@media (max-width: 534px)',
  medium: '@media (max-width: 1000px)',
  large: '@media (min-width: 2500px)',
};

// 사용 예시 (import를 size로 했을 시에)
// ${size.medium} {
//   font-size : 2rem;
// }
// ${size.large} {
//   font-size : 4rem;
// }
