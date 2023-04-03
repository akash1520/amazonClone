import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { updateUser } from '../../features/authSlice'
import { Navigate } from 'react-router-dom'



export default function Option({deleteData}) {
  const dispatch = useDispatch()
  const token = useSelector((state)=>state.auth.token.token)

  async function removeData(){
    const res = await axios.delete(`${process.env.REACT_APP_API}/removeCart/${deleteData}`,
    {
      withCredentials:true,
      headers:{
        "Authorization":`Bearer ${token}`
      }
    },{

    })
    if(res.status===200){
      console.log("cartItem deleted")
      dispatch(updateUser({user:res.data}))
      toast.success("Item deleted successfully!!")
      Navigate("/buynow")
    }else{
      res.status(400).json({error:"error"})
    }
  }

  return (
    <div className='add_remove_select'>
    <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
    </select>
    <p style={{cursor:"pointer"}} onClick={()=>{removeData()}}>Delete</p><span>|</span>
    <p className='forremovemedia' style={{cursor:"pointer"}}>Save for Later</p><span>|</span>
    <p className='forremovemedia' style={{cursor:"pointer"}}>See more like this</p>
    <ToastContainer/>
    </div>
  )
}
