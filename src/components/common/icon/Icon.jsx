import PropTypes from 'prop-types';
import * as icon from 'src/assets';
import { css } from 'styled-components';

//사용 예시
// <Icon name="iconName" size={size} />

export const Icon = ({ name, size, color, fill, style, ...rest }) => {
  const SVGIcon = icon[name];

  // SVG 파일의 width와 height를 size prop에 따라 동적으로 설정
  const svgStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const IconStyles = css`
    &,
    path {
      ${color ? `stroke: ${color} !important;` : ''}
      ${fill ? `fill: ${color} !important;` : ''}
    }
    circle {
      ${color ? `stroke: ${color} !important;` : ''}
      ${fill ? `fill: ${color} !important;` : ''}
    }
    cursor: pointer;
  `;

  return <SVGIcon {...rest} css={IconStyles} style={{ ...style, ...svgStyle }} />;
};

Icon.propTypes = {
  // 이 부분에 사용할 아이콘 컴포넌트명 추가
  name: PropTypes.oneOf([
    'MarkDown',
    'VideoChat',
    'SmileEmoji',
    'LeftArrow',
    'Send',
    'MarkDown',
    'Call',
    'Close',
    'NavBar',
    'Search',
    'Star',
    'Clover',
    'Rose',
    'Review',
    'Fold',
    'Circle',
    'Left',
    'Right',
  ]).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  fill: PropTypes.string,
};
