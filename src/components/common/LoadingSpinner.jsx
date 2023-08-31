
import PropTypes from 'prop-types'; // prop-types를 임포트합니다

import * as S from './LoadingSpinner.styles';

export function LoadingSpinner({
    color = '#FEAF04',
    size = 25,
    weight = 2,
    type = 'dark',
    isFullWidth = false,
}) {
    const spinnerType =
        type === 'dark'
            ? 'gray'
            : type === 'light'
                ? '#cbcbcb'
                : 'transparent';

    return (
        <S.LoadingSpinnerWrapper isFullWidth={isFullWidth}>
            <S.Spinner
                role="progressbar"
                $size={size}
                $color={color}
                style={{
                    '--loading-spinner-weight': `${weight}px`,
                    '--loading-spinner-border-color': spinnerType,
                }}
            />
        </S.LoadingSpinnerWrapper>
    );
}

// 프로퍼티 타입 유효성 검사 추가
LoadingSpinner.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    weight: PropTypes.number,
    type: PropTypes.oneOf(['dark', 'light', 'transparent']),
    isFullWidth: PropTypes.bool,
};

export default LoadingSpinner;
