import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ScrollToTop from './globalLayout/ScrollToTop';
import AuthLayout from './pages/auth/AuthLayout';
// import MentiAuthLayout from './pages/auth/menti/MentiAuthLayout';
import ChatRoomLayout from './pages/chat/ChatRoomLayout';
import DetailLayout from './pages/detail/DetailLayout';
import NotFoundLayout from './pages/error/NotFoundLayout';
import MainLayout from './pages/main/MainLayout';
import MentoMainLayout from './pages/main/MentoMainLayout';
import MentiMyLayout from './pages/my/MentiMyLayout';
import MentoMyLayout from './pages/my/MentoMyLayout';
import ListMentoLayout from './pages/list/ListMentoLayout';
import ListPostLayout from './pages/list/ListPostLayout';
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
          path: 'mento',
          element: <MentoMainLayout />,
        },
        {
          path: 'chatroom',
          element: <ChatRoomLayout />,
        },
        {
          path: 'chatroom',
          element: <ChatRoomLayout />,
        },
        {
          path: 'detail',
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
              path: 'mento',
              element: <ListMentoLayout />,
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
      <GlobalFonts />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
