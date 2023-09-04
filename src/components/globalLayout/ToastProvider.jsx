import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

const ToastProvider = () => {
  return <ToastContainer autoClose={2000} />;
};

export default ToastProvider;
