import { useRef, useState } from 'react';

import * as S from './ProfileImage.style';
import { Icon } from '../common/icon/Icon';



const accesstoken =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwLCJhdXRob3JpdGllcyI6WyJNRU5URUUiXSwiaWF0IjoxNjk0OTUzMDk2LCJleHAiOjE2OTQ5NTY2OTZ9.5z8Bh8_zBMDoESL5doPUlNfe_Bqx3BEoRR_dHLINFgA';
//포인트조회하기


const ProfileImage = ({
  size = 250,
  src = 'https://dszw1qtcnsa5e.cloudfront.net/community/20211130/402a72aa-9929-4650-a268-a251cef9bf03/1636073253.png',
}) => {
  const [selectedFile, setSelectedFile] = useState(src);
  const fileInputRef = useRef(selectedFile);

  const ProfileImageUpload = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = async (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
    const imageData = event.target.files[0]
    const formData = new FormData();
    formData.append('file', imageData);
    const response = await fetch("https://codevelop.store/api/v1/mentee/mypage/changeimage", {
      method: "POST",
      headers: { Authorization: accesstoken, },
      body: formData
    })
    console.log(response)
  };
  return (

    <>
      <S.Container size={size}>
        {/* <S.ProfileImage src={src} alt="" size={size} /> */}

        <div>
          <S.MemberImage src={selectedFile} size={size} />
          <input
            type="file"
            name="image"
            id="image"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <Icon
            name="Setting"
            onClick={ProfileImageUpload}
            size={40}
            style={{ cursor: 'pointer' }}
          ></Icon>
        </div>
      </S.Container>
    </>
  );
};

export default ProfileImage;
