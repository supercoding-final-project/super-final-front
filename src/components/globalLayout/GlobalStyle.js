export const theme = {
  color: {
    default: '#FFB71A0',
    point: '#323232',
    main: '',
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
