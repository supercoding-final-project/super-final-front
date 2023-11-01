import { useRecoilState } from 'recoil';
import { mentorListAtom } from 'src/store/filter/MentorListAtom';

export const useMentorFtiler = () => {
  const [mentorListData, setMentorListData] = useRecoilState(mentorListAtom);

  const updateMentorListData = (key, value) => {
    setMentorListData((prevItemList) => ({
      ...prevItemList,
      [key]: value,
    }));
  };

  return updateMentorListData;
};
