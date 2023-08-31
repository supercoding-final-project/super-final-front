import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import * as S from './chat.style';
import chat from '../../assets/chat.svg';
import search from '../../assets/search.svg';

const ChatListLayout = () => {
  // tab 상태관리
  const [tabState, setTabState] = useState('전체');

  // 검색창 value
  const [searchValue, setSearchValue] = useState('');

  const clickTab = (e) => {
    setTabState(e.currentTarget.innerHTML);
  };

  const onChangeSearchInputValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log('보내지는 값 :', searchValue);
    setSearchValue('');
  };

  return (
    <S.ChatListWrap>
      <h2>채팅</h2>
      <form className="input-box" onSubmit={onSubmitForm}>
        <img src={search} alt="search svg" />
        <input
          type="text"
          onChange={onChangeSearchInputValue}
          value={searchValue}
          placeholder="멘토님의 이름을 검색해보세요."
        />
        <AiFillCloseCircle />
      </form>
      <ul className="tab">
        <li onClick={clickTab} className={tabState === '전체' ? 'active' : ''}>
          전체
        </li>
        <li onClick={clickTab} className={tabState === '안 읽음' ? 'active' : ''}>
          안 읽음
        </li>
      </ul>
      {tabState === '전체' && <div>전체꺼</div>}
      {tabState === '안 읽음' && <div>안 읽음</div>}
      <div className="not-have-box">
        <img src={chat} alt="chat svg" />
        <strong>채팅이 없습니다.</strong>
        <span>멘토님을 찾아 채팅을 시작해보세요!</span>
        <button>멘토님 찾기</button>
      </div>
    </S.ChatListWrap>
  );
};

export default ChatListLayout;
