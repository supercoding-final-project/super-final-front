import { toast } from 'react-toastify';
import { theme } from 'src/globalLayout/GlobalStyle';

export const useShowToast = (msg, position, validTime) => {
  toast.info(msg, {
    position: position,
    autoClose: validTime,
    style: {
      backgroundColor: `${theme.color.point}`,
      color: 'white',
      fontSize: '1rem',
      padding: '1rem',
      width: '30rem',
      borderRadius: '1rem',
      margin: `0px auto`,
    },
  });
};
