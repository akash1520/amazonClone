import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './signup.css'

export default function SignIn() {

    const [logData,setLogData]=useState({
        email:"",
        password:""
    })
    // console.log(logData)
    function addData(e){
        const {name,value}=e.target;
        setLogData(()=>{
            return{
                ...logData,
                [name]:value
            }
        })
    }

  return (
    <>
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src='/blacklogoamazon.png' alt='amazonlogo'/>
                </div>
                <div className="sign_form">
                    <form>
                        <h1>Sign In</h1>
                        <div className="form_data">
                            <label htmlFor='email'>
                                Email
                            </label>
                            <input type="email" onChange={addData} value={logData.email} name='email' id='email'/>
                        </div>
                        <div className="form_data">
                            <label htmlFor='password'>
                                Password
                            </label>
                            <input type="password" onChange={addData} value={logData.password} placeholder='At least 6 character' name='password' id='password'/>
                        </div>
                        <button className='signin_btn'>Continue</button>
                    </form>
                </div>
                <div className="create_accountinfo">
                        <p>New to Amazon</p>
                        <button><NavLink to="/register">Create Your Amazon Account</NavLink></button>
                    </div>
            </div>
        </section>
    </>
  )
}
