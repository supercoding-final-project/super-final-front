import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ScrollToTop from './globalLayout/ScrollToTop';
import ToastProvider from './globalLayout/ToastProvider';
import AuthLayout from './pages/auth/AuthLayout';
// import MentiAuthLayout from './pages/auth/menti/MentiAuthLayout';
import ChatRoomLayout from './pages/chat/ChatRoomLayout';
import DetailLayout from './pages/detail/DetailLayout';
import NotFoundLayout from './pages/error/NotFoundLayout';
import ListMentorLayout from './pages/list/ListMentorLayout';
import ListPostLayout from './pages/list/ListPostLayout';
import MainLayout from './pages/main/MainLayout';
import MentiMyLayout from './pages/my/MentiMyLayout';
import MentoMyLayout from './pages/my/MentoMyLayout';
import ScreenLayout from './pages/screen/ScreenLayout';
import GlobalFonts from '../public/fonts/index.js';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <MainLayout />,
        },
        {
          path: 'auth',
          element: <AuthLayout />,
        },
        {
          path: 'chatroom',
          element: <ChatRoomLayout />,
        },
        {
          path: 'screenroom',
          element: <ScreenLayout />,
        },
        {
          path: 'detail/:postId',
          element: <DetailLayout />,
        },

        {
          path: 'my',
          children: [
            {
              path: 'menti',
              element: <MentiMyLayout />,
            },
            {
              path: 'mento',
              element: <MentoMyLayout />,
            },
          ],
        },
        {
          path: 'list',
          children: [
            {
              path: 'mentor',
              element: <ListMentorLayout />,
            },
            {
              path: 'post',
              element: <ListPostLayout />,
            },
          ],
        },
        {
          path: '*',
          element: <NotFoundLayout />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {
  return (
    <>
      <RecoilRoot>
        <GlobalFonts />
        <ScrollToTop />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ToastProvider />
      </RecoilRoot>
    </>
  );
};
