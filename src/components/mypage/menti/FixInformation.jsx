
import axios from 'axios';
import { useRef, useState } from 'react';
import * as S from 'src/pages/my/mentiMyLayout.style';

import ProfileImage from '../ProfileImage';




const FixInformation = ({ User, accesstoken }) => {
  const [enterNickanme, setEnterNickname] = useState(false);
  const [nicknameValue, setNicknameValue] = useState(User.nickname);
  const nickNameRef = useRef('')
  const emailRef = useRef('')
  // const [,] = useState()
  // const [fixNickname, setFixNickname] = useState('')

  const NickNameFixHandler = () => {
    setEnterNickname((prev) => !prev);
  };
  const EnteredNickNameCheck = (event) => {
    let enteredNickName = event.target.value;
    //특수문자체크
    const pattern = /[~!@#\\#$%<>^&*\s]/;
    let check = enteredNickName.trim();
    if (pattern.test(check)) {
      console.log('첫글자 특문이거나 공백임 이거안됨');
    } else {
      console.log(check);
      setNicknameValue(check);
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

  const correction = async () => {
    console.log(emailRef.current.value)
    const url = "https://codevelop.store/api/v1/mentees/info"
    try {
      const response = await axios.post(
        url,
        {
          email: emailRef.current.value,
          nickname: nicknameValue,
          thubnailImageUrl: User.thubnailImageUrl
        },
        {
          headers: {
            Authorization: accesstoken
          }
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };




  return (
    <>
      <S.FixInformationContainer>
        <ProfileImage accesstoken={accesstoken} User={User} />
        {enterNickanme ? (
          <S.FixInformationBox>
            <S.FixInformationLabel>닉네임</S.FixInformationLabel>
            <S.FixInformationMentiNameInput
              placeholder="변경할 아이디를 입력해주세요"
              onChange={EnteredNickNameCheck}
              onKeyDown={keyEnter}
              onBlur={blurBox}
              ref={nickNameRef}
              autoFocus
            ></S.FixInformationMentiNameInput>
          </S.FixInformationBox>
        ) : (
          <S.FixInformationBox>
            <S.FixInformationLabel>닉네임</S.FixInformationLabel>
            <S.FixInformationMentiName onClick={NickNameFixHandler}>
              {nicknameValue}
            </S.FixInformationMentiName>
          </S.FixInformationBox>
        )}

        <S.FixInformationBox>
          <S.FixInformationLabel>이메일</S.FixInformationLabel>
          <S.FixInformationMentiNameInput
            placeholder="변경할 이메일을 입력해주세요"
            onKeyDown={keyEnter}
            onBlur={blurBox}
            ref={emailRef}
          ></S.FixInformationMentiNameInput>
        </S.FixInformationBox>
        <S.NickNameFixButton onClick={correction} > 정보수정하기</S.NickNameFixButton>

      </S.FixInformationContainer >
    </>
  );
};
export default FixInformation;
