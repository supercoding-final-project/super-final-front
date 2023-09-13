import { useRecoilState } from 'recoil';
import { postRequestAtom } from 'src/store/post/postRequestAtom';

export const usePostRequest = () => {
  const [postData, setPostData] = useRecoilState(postRequestAtom);

  const updatePostData = (key, value) => {
    setPostData((prevItemList) => ({
      ...prevItemList,
      [key]: value,
    }));
    console.log(postData);
  };

  return updatePostData;
};
