import React, { useEffect } from "react";
import {useHistory} from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import swal from 'sweetalert';

import MsgValidationError from '../../../../Components/MessageValidationError';
import Button from "../../../../Components/Button";
import Input from "../../../../Components/Input";
import Footer from '../../../../Components/MainComponents/Footer';

import "./style.css";

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
});

const INITIAL_VALUES={
  email: '',
};

const ResetPassword =()=> {
  const history=useHistory();
  useEffect(()=>{
    localStorage.removeItem("page");
  },[]);
  
  const formik = useFormik({
    initialValues:INITIAL_VALUES,
    validationSchema: validationSchema,
    onSubmit:async(values) =>{
      const { email} = values;
      fetch('https://personalecommerce.herokuapp.com/auth/reset-password',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
              },
        body:JSON.stringify({email:email}),
      })
      .then(res=>res.json())
        .then(result=>{
          swal({
            title: "Send email!",
            text: "Winkel sent reset password email for you.Please check your email",
            icon: "success",
            buttons:{
              text:'OK'
            }
          })
         history.push('/')
        })
      .catch(err=>console.log(err))
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
                <form  onSubmit={formik.handleSubmit}>
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
                  <Button auth="SEND EMAILL TO RESET PASSWORD"></Button>        
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

export default ResetPassword
