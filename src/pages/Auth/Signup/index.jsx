import React, { useEffect } from 'react';
import {NavLink,useHistory} from 'react-router-dom'
import * as yup from 'yup';
import { useFormik } from 'formik';

import MsgValidationError from '../../../Components/MessageValidationError';
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';
import Footer from '../../../Components/MainComponents/Footer';

import './style.css';

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
  name: yup
    .string('Enter Name')
    .required('Name is required')
});

const INITIAL_VALUES={
  email: '',
  password: '',
  name:''
}
 const Signup =(props)=>  {
  const history=useHistory();

  useEffect(()=>{
    localStorage.removeItem("page");
  },[]);
  
  const signupHandler = (authData) => {
    this.setState({ authLoading: true });
    const graphqlQuery={
      query:`
      mutation:{
        createUser(userInput:{email:"${
          authData.signupForm.email.value
        }",name:"${authData.signupForm.name.value}",
        password:"${authData.signupForm.password.value}"}){
          _id,
          email
        }
      }
      `
    }
      // eslint-disable-next-line no-useless-concat
      fetch('https://personalecommerce.herokuapp.com'+'/graphql', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({graphqlQuery})
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        if(resData.errors && resData.errors[0].status===422){
          throw new Error('User creation failed!')
        }
        // this.setState({isAuth:false,authLoading:false})
          history.push('/login');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues:INITIAL_VALUES,
    validationSchema: validationSchema,
    onSubmit:async(values) =>{
      const { email, password,name } = values;
        signupHandler({email, password ,name})
      }
  })
     return (
      <div className='signupSection'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" style={{display:'block',margin:'auto'}}>
            <div className="signup-form">
            <a aria-current="page" className="navbar-brand signup" href="/">Winkel</a>
              <h2 className='signupTitle'>Register</h2>
              <form onSubmit={formik.handleSubmit} style={{width:'100%',margin:'0',padding:'0'}} >
              <Input
                name="name"
                label="Name"
                type="input"
                placeholder="Your name"   
                onChange={formik.handleChange}               
                onBlur={formik.handleBlur}
                value={formik.values.name}
                invalid={formik.errors.name&&formik.touched.name}
               ></Input>
                <MsgValidationError
                messageErr={formik.errors.name}
                touchedOop={formik.touched.name}
            />
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
                <Button type="submit" auth="REGISTER"></Button>              
              </form>            
              <div className='switchLogin'>
                <NavLink to="/login" className='orLogin'>Or Login</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
     )
   }
export default Signup
