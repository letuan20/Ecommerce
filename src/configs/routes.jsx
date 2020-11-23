import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import Layout from '../layouts';

const routes = [
    {
        name: 'Home',
        path: '/',
        Component: lazy(()=>import('../pages/Home')),
        exact:true,
        props:{}
    },
    //Error
    {
        name:'Error Page',
        path:'/404',
        Component:lazy(()=>import('../pages/System404')),
        exact:true,
        props:{}
    },
    //Auth
    {
        name:'Login',
        path:'/login',
        Component:lazy(()=>import('../pages/Auth/Login')),
        exact:true,
        props:{}
    },
    {
        name:'Sign Up',
        path:'/signup',
        Component:lazy(()=>import('../pages/Auth/Signup')),
        exact:true,
        props:{}
    },
    {
        name:'Set New Password',
        path:'/reset-password/:token',
        Component:lazy(()=>import('../pages/Auth/ForgetPassword/NewPassword')),
        exact:true,
        props:{}
    },
    {
        name:'Reset Password',
        path:'/reset-password',
        Component:lazy(()=>import('../pages/Auth/ForgetPassword/ResetPassword')),
        exact:true,
        props:{}
    },  
    {
        name:'Log out',
        path:'/logout',
        Component:lazy(()=>import('../pages/Auth/Logout')),
        exact:true,
        props:{}
    },
    //Product
    {
        name:'Shop',
        path:'/shop',
        Component:lazy(()=>import('../pages/Shop')),
        exact:true,
        props:{}
    },
    {
        name:'Detail Product',
        path:'/:productId',
        Component:lazy(()=>import('../pages/DetailProduct')),
        exact:true,
        props:{}
    },
    {
        name:'Cart',
        path:'/cart',
        Component:lazy(()=>import('../pages/Checkout/ShoppingCart')),
        exact:true,
        props:{}
    },
    {
        name:'Shipping',
        path:'/shipping',
        Component:lazy(()=>import('../pages/Checkout/Shipping')),
        exact:true,
        props:{}
    },
    {
        name:'Payment',
        path:'/payment',
        Component:lazy(()=>import('../pages/Checkout/Payment')),
        exact:true,
        props:{}
    },
    {
        name:'Complete Order',
        path:'/complete-order',
        Component:lazy(()=>import('../pages/Checkout')),
        exact:true,
        props:{}
    },
  
];

const Routes=()=>{
    return (
        <Router>
        <ToastProvider autoDismiss={true}>
        <Layout>
                <Switch>
              {routes.map(({ path, Component, exact }) => (
                <Route
                  path={path}
                  key={path}
                  exact={exact}
                  render={() => (
                    <Suspense fallback={null}>
                     <Component /> 
                    </Suspense>
                  )}
                />
              ))}
              <Redirect to="/" />
            </Switch> 
         </Layout>    
         </ToastProvider>
           </Router>        
    )
}

export default Routes;