// import React, { useState } from 'react';

import { ModalWrapper } from './ModalProps.style';

export const ModalProps = ({ setShowModal }) => {
  //   const [isLoading, setIsloading] = useState(false);

  const handlecloseModal = () => {
    setShowModal(false);
  };

  //   const handleInputEnter = () => {
  //     const valtrim = inputValue.trim();
  //     if (isKeyboardEvent(e) && e.key !== 'Enter') {
  //       return;
  //     }
  //     if (valtrim === '') {
  //       alert('검색어를 입력해 주세요.');
  //       return;
  //     }
  //     setIsloading(true);
  //     dispatch(chechControl());

  //     dispatch(getSearchItems({ keyword: inputValue }))
  //       .unwrap()
  //       .then(() => {
  //         setIsloading(false);
  //         dispatch(getKeyword(inputValue));
  //         dispatch(getSortType(''));
  //         setShowModal(false);
  //         navigate('/main');
  //       })
  //       .catch(() => {
  //         setIsloading(false);
  //         alert('해당 검색어에 맞는 상품이 없습니다.');
  //       });
  //   };

  return (
    <S.ModalWrapper onClick={handlecloseModal}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="searchmodal_box" onClick={(e) => e.stopPropagation()}>
          {/* <div className="search_inputinfo">
              <img onClick={handleInputEnter} src="/img/whitesearch.svg" alt="search" />
            </div> */}
        </div>
      )}
    </S.ModalWrapper>
  );
};
