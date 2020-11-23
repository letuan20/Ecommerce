import React,{useEffect,useState} from 'react';
import { useLocation, Redirect } from 'react-router-dom';

const Layout=({children})=>{
    const { pathname, search } = useLocation();
    const [isAuth,setIsAuth]=useState(false);
    const logoutHandler = () => {
        setIsAuth(false)
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
        localStorage.removeItem('page');
        localStorage.removeItem('userName');
        localStorage.removeItem('isAuth');
        window.location.reload(false)
      };
 
    const unauthorizedRoutes=[
        '/',
        '/login',
        '/signup',
        '/reset-password',
        '/reset-password/:token',
        '/cart',
        '/shop',
        '/:productId',
    ]
    const authorizedRoutes=[
        '/logout',
        '/cart',
        '/shipping',
        '/payment',
        '/complete-order'
    ]
    // Auto logout when section finish : 60 minutes
    useEffect(()=>{
        const setAutoLogout = milliseconds => {
            setTimeout(() => {
                logoutHandler();
            }, milliseconds);
          };
        const token = localStorage.getItem('token');
        const expiryDate = localStorage.getItem('expiryDate');
        if (!token || !expiryDate) {
          return;
        }
        if (new Date(expiryDate) <= new Date()) {
            logoutHandler();
          return;
        }
        const remainingMilliseconds =new Date(expiryDate).getTime() - new Date().getTime();
            setIsAuth(true);
            setAutoLogout(remainingMilliseconds);
    },[pathname, search]);
    // Layout Elements
    const BootstrappedLayout= () =>{
        return <>{children}</>;
    } 
    return <>{BootstrappedLayout()}</>;
}

export default Layout