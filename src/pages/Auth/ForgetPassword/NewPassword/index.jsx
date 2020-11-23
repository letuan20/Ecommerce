import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import * as yup from 'yup';
import { useFormik } from 'formik';
import swal from 'sweetalert';

import Button from "../../../../Components/Button";
import Input from "../../../../Components/Input";
import MsgValidationError from '../../../../Components/MessageValidationError';
import Footer from '../../../../Components/MainComponents/Footer';

import "./style.css";

const validationSchema = yup.object().shape({
  newPassword: yup.string()
    .label('newPassword')
    .required('New password is required')
    .matches(/(?=.*[a-z])/, 'One lowercase required!')
    .matches(/(?=.*[A-Z])/, 'One uppercase required!')
    .matches(/(?=.*[0-9])/, 'One numeric required!')
    .min(8, 'Minimum 8 characters required!'),
  confirmPassword: yup.string()
    .required('Confirm password is required')
    .label('Confirm password')
    .oneOf([yup.ref('newPassword'), null], 'Passwords do not match'),
});

const INITIAL_VALUES = {
  newPassword: '',
  confirmPassword: '',
};

const ResetPassword =(props)=> {
  const history=useHistory();
  useEffect(()=>{
    localStorage.removeItem("page");
  },[]);
  const formik = useFormik({
    initialValues:INITIAL_VALUES,
    validationSchema: validationSchema,
    onSubmit:async(values) =>{
      const { newPassword } = values;
      // eslint-disable-next-line no-useless-concat
      fetch('https://personalecommerce.herokuapp.com'+'/auth/new-password',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
              },
        body:JSON.stringify({password:newPassword,token:props.match.params.token}),
      })
      .then(res=>res.json())
        .then(result=>{
          swal({
            title: "Change password successfully!",
            text: "Hello my friend! Just sign in and enjoy",
            icon: "success",
            buttons:{
              text:'OK'
            }
          })
         history.push('/login');
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
                <h3 className="loginTitle">NEW PASSWORD</h3>
                <form  onSubmit={formik.handleSubmit}>
                <Input
          name="newPassword"
          label="Password"
          type="password"
          placeholder="Password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          invalid={formik.touched.newPassword && formik.errors.newPassword}
        />
         <MsgValidationError
                messageErr={formik.errors.newPassword}
                touchedOop={formik.touched.newPassword}
            />
                 <Input
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          invalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
         <MsgValidationError
                messageErr={formik.errors.confirmPassword}
                touchedOop={formik.touched.confirmPassword}
            />
                  <Button auth="SET NEW PASSWORD"></Button>        
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

export default ResetPassword;
