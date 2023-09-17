import axios from 'axios';
import { useState } from 'react';
import * as S from 'src/pages/my/mentiMyLayout.style';

import ProfileImage from '../ProfileImage';

const FixInformation = ({ User }) => {
  const [enterNickanme, setEnterNickname] = useState(false);
  const [nicknameValue, setNicknameValue] = useState(User.nickname);
  const [profileImage, setProfileImage] = useState();
  // const [,] = useState()
  // const [fixNickname, setFixNickname] = useState('')

  //서버에 중복확인 요청보내기
  const duplicateCheck = (changedNickname) => {
    //유효성 검사 넣어야됨
    console.log(changedNickname);

    axios('url', {
      changedNickname,
    })
      .then((response) => console.log(response))
      .catch(alert('안됨'));
  };

  const NickNameFixHandler = () => {
    setEnterNickname((prev) => !prev);
  };
  const EnteredNickNameCheck = (event) => {
    let enteredNickName = event.target.value;
    //특수문자체크
    const pattern = /[~!@#\\#$%<>^&*\s]/;
    const check = enteredNickName.trim();
    if (pattern.test(check)) {
      console.log('첫글자 특문이거나 공백임 이거안됨');
    } else {
      console.log('ㅇㅋ 통과');
      setNicknameValue(enteredNickName.trim());
    }
  };
  const keyEnter = (event) => {
    if (event.key === 'Enter') {
      setEnterNickname((prev) => !prev);
    }
  };
  const blurBox = () => {
    setEnterNickname(false);
  };
  const saveNickName = () => {
    console.log(nicknameValue);
    console.log(profileImage);
    return;
  };
  return (
    <>
      <S.FixInformationContainer>
        <ProfileImage setProfileImage={setProfileImage} />
        <button>이미지변경버튼 </button>
        {enterNickanme ? (
          <S.FixInformationBox>
            <S.FixInformationLabel>닉네임</S.FixInformationLabel>
            <S.FixInformationMentiNameInput
              placeholder="변경할 아이디를 입력해주세요"
              onChange={EnteredNickNameCheck}
              onKeyDown={keyEnter}
              onBlur={blurBox}
              autoFocus
            ></S.FixInformationMentiNameInput>
            <S.NickNameFixButton>수정</S.NickNameFixButton>
          </S.FixInformationBox>
        ) : (
          <S.FixInformationBox>
            <S.FixInformationLabel>닉네임</S.FixInformationLabel>
            <S.FixInformationMentiName onClick={NickNameFixHandler}>
              {nicknameValue}
            </S.FixInformationMentiName>
            <S.NickNameFixButton onClick={saveNickName}>수정</S.NickNameFixButton>
          </S.FixInformationBox>
        )}
      </S.FixInformationContainer>
    </>
  );
};
export default FixInformation;
