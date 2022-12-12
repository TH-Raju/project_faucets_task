import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import HomeBody from '../../src/components/HomeBody';
import Login from '../../src/components/Login';
import SignUp from '../../src/components/SignUp';
import Faq from '../../src/components/Faq';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomeBody></HomeBody>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])