import React,{useEffect,useState} from 'react';
import {NavLink} from 'react-router-dom';

import './style.css';

const SubNavigation=()=>{
    const [account,setAccount]=useState('');
    const isAuth=localStorage.getItem('isAuth');

    useEffect(()=>{
      const username=localStorage.getItem('userName');
      setAccount(username)
    },[account]);
    
    return(
        <div className="py-1 bg-black">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                <h5 className="name">{account}</h5>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <span style={{width:'100%'}} className="text">{isAuth==='true'
                  ?<NavLink to="/logout">Sign Out</NavLink>
                  :<span><NavLink to="/login">Sign In</NavLink><span><NavLink to="/signup" style={{marginLeft:'1rem'}}>Sign Up</NavLink></span></span>}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default SubNavigation