import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import './signup.css'
export default function SignIn() {

    const initialState={
        email:"",
        password:""
    }

    const [logData,setLogData]=useState(initialState)
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

    const sendData = async (e) => {
        e.preventDefault();
        const res = await
            axios
                .post("/login", logData)
                .then((response)=>{
                        toast.success("Signed in successfully",{
                            position:"top-center"
                        })
                        // alert("Signed up successfully")
                        setLogData(initialState)
                })
                .catch(error=>{
                    toast.error(`${error.response.statusText} : Try again with proper details `,{
                        position:"top-center"
                    });
                })

    }

  return (
    <>
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src='/blacklogoamazon.png' alt='amazonlogo'/>
                </div>
                <ToastContainer/>
                <div className="sign_form">
                    <form method='POST'>
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
                        <button className='signin_btn' onClick={sendData}>Continue</button>
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
