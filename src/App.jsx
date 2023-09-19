import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ScrollToTop from './globalLayout/ScrollToTop';
import AuthLayout from './pages/auth/AuthLayout';
// import MentiAuthLayout from './pages/auth/menti/MentiAuthLayout';
import ChatRoomLayout from './pages/chat/ChatRoomLayout';
import DetailLayout from './pages/detail/DetailLayout';
import NotFoundLayout from './pages/error/NotFoundLayout';
import MentoListLayout from './pages/list/MentoListLayout';
import PostListLayout from './pages/list/PostListLayout';
import MainLayout from './pages/main/MainLayout';
import MentoMainLayout from './pages/main/MentoMainLayout';
import MentiMyLayout from './pages/my/MentiMyLayout';
import MentoMyLayout from './pages/my/MentoMyLayout';
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
              element: <MentoListLayout />,
            },
            {
              path: 'post',
              element: <PostListLayout />,
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
