import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AuthLayout from './pages/auth/AuthLayout';
// import MentiAuthLayout from './pages/auth/menti/MentiAuthLayout';
import ChatRoomLayout from './pages/chat/ChatRoomLayout';
import DetailLayout from './pages/detail/DetailLayout';
import NotFoundLayout from './pages/error/NotFoundLayout';
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
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
