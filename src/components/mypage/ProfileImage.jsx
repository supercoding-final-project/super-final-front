import { useRef, useState } from 'react';
import { Setting } from 'src/assets';

import * as S from './ProfileImage.style';
import { Icon } from '../common/icon/Icon';

const ProfileImage = ({
  size = 250,
  src = 'https://dszw1qtcnsa5e.cloudfront.net/community/20211130/402a72aa-9929-4650-a268-a251cef9bf03/1636073253.png',
  setProfileImage,
}) => {
  const [selectedFile, setSelectedFile] = useState(src);
  const fileInputRef = useRef(selectedFile);

  const ProfileImageUpload = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    setProfileImage(event.target.files[0]);
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
    const response = async () => {
      fetch('/api/v1/mentee/mypage/changeimage');
    };
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
