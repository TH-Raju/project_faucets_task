import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/Router';

export const UserContext = createContext();

function App() {
  const [value, setValue] = useState('');
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Main></Main>,
  //     children: [
  //       {
  //         path: '/',
  //         element: <HomeBody></HomeBody>
  //       },
  //       {
  //         path: '/login',
  //         element: <Login></Login>
  //       },
  //       {
  //         path: '/signup',
  //         element: <SignUp></SignUp>
  //       },
  //       {
  //         path: '/faq',
  //         element: <Faq></Faq>
  //       }
  //     ]
  //   }
  // ])

  const valueSend = [
    value,
    setValue
  ]

  return (
    <div>
      <UserContext.Provider value={valueSend}>
        <RouterProvider router={router}></RouterProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
