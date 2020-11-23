import React, { useEffect } from "react";
import { NavLink,useHistory } from "react-router-dom";
import axios from 'axios';

import * as yup from 'yup';
import { useFormik } from 'formik';

import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import MsgValidationError from '../../../Components/MessageValidationError';
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import Footer from '../../../Components/MainComponents/Footer';

import "./style.css";

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
      .matches(/(?=.*[a-z])/, 'One lowercase required!')
      .matches(/(?=.*[A-Z])/, 'One uppercase required!')
      .matches(/(?=.*[0-9])/, 'One numeric required!')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});


const INITIAL_VALUES={
  email: '',
  password: '',
}

const Login = ()=> {
  const history=useHistory();

  useEffect(()=>{
    localStorage.removeItem("page");
  },[]);

  const setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  const loginHandler=(authData)=>{
    // eslint-disable-next-line no-useless-concat
    fetch('https://personalecommerce.herokuapp.com'+'/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:authData.email,
        password:authData.password
      })
    })
    .then(res=>{
      if(res.status===422){
        throw new Error('Validation failed')
      }
      if(res.status !== 200 && res.status !==201){
        throw new Error('Could not authenticate you!')
      }
      return res.json()
    })
    .then(resData=>{
      localStorage.setItem('isAuth',true);
      localStorage.setItem('token',resData.token);
      localStorage.setItem('userId',resData.userId);
      localStorage.setItem('userName',resData.name)
      const remainingMilliseconds=60*60*1000;
      const expiryDate=new Date(
        new Date().getTime() + remainingMilliseconds
      )
      localStorage.setItem('expiryDate',expiryDate.toISOString())
        setAutoLogout(remainingMilliseconds);
    })
    .then(result=>{
        history.push('/');
    })
    .catch(err=>{
      console.log(err)
    })
  };
  
  const responseSuccessGoogle=(response)=>{
    axios({ 
      method:"POST",
      url:'https://personalecommerce.herokuapp.com'+'/auth/googleLogin',
      data:{tokenId:response.tokenId}
    })
    .then(res=>{
      if(res.status===422){
        throw new Error('Validation failed')
      }
      if(res.status !== 200 && res.status !==201){
        throw new Error('Could not authenticate you!')
      }
      return res.data
    })
    .then(resData=>{
      localStorage.setItem('userName',resData.name)
      localStorage.setItem('isAuth',true);
      localStorage.setItem('token',resData.token);
      localStorage.setItem('userId',resData.userId);
      const remainingMilliseconds=60*60*1000;
      const expiryDate=new Date(
        new Date().getTime() + remainingMilliseconds
      )
      localStorage.setItem('expiryDate',expiryDate.toISOString())
    })
    .then(result=>{
      history.push('/');
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const responseErrorGoogle=(response)=>{
  }
  const responseFacebook=(response)=>{
    axios({
      method:"POST",
      url:'https://personalecommerce.herokuapp.com'+'/auth/facebookLogin',
      data:{accessToken:response.accessToken,userID:response.userID,name:response.name}
    })
    .then(response=>{
      if(response.status===422){
        throw new Error('Validation failed')
      }
      if(response.status !== 200 && response.status !==201){
        throw new Error('Could not authenticate you!')
      }
    
      return response
    })
    .then(resData=>{
      localStorage.setItem('userName',resData.data.name);
      localStorage.setItem('isAuth',true);
      localStorage.setItem('token',resData.token);
      localStorage.setItem('userId',resData.userId)
      const remainingMilliseconds=60*60*1000;
      const expiryDate=new Date(
        new Date().getTime() + remainingMilliseconds
      )
      localStorage.setItem('expiryDate',expiryDate.toISOString())
    })
    .then(result=>{
      history.push('/');
    })
    .catch(err=>{
      console.log(err)
    })
}
  const formik = useFormik({
    initialValues:INITIAL_VALUES,
    validationSchema: validationSchema,
    onSubmit:async(values) =>{
      const { email, password } = values;
      loginHandler({
        email, password 
        })
      }
})
    return (
      <div className="loginSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{display:'block',margin:'auto'}}>
              <div className="login-form">
              <a aria-current="page" className="navbar-brand login" href="/">Winkel</a>
                <h2 className="loginTitle">Login</h2>
                <form onSubmit={formik.handleSubmit}>
        <Input
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
          onBlur={formik.handleBlur}
          invalid={formik.errors.email&&formik.touched.email}
        />
          <MsgValidationError
                messageErr={formik.errors.email}
                touchedOop={formik.touched.email}
            />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          invalid={formik.touched.password && formik.errors.password}
        />
         <MsgValidationError
                messageErr={formik.errors.password}
                touchedOop={formik.touched.password}
            />
              <div className="giCheck">
                  <div className="giMore">
                    <NavLink to="/reset-password" className="forgetPass">
                      Forget your Password
                    </NavLink>
                  </div>
              </div>
        <Button auth="SIGN IN"></Button>
        <GoogleLogin className="google"
    clientId="817246329623-n2jra5ui603dkaugk86sfc5geef37mfm.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseSuccessGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  > <span> Login with Google</span></GoogleLogin>
   <FacebookLogin  className="facebook"
    appId="730621214163335"
    autoLoad={false}
    callback={responseFacebook} />
      </form>
                <div className="switchSignup">
                  <NavLink to="/signup" className="orSignup">
                    Or Create An Account
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

export default Login;
