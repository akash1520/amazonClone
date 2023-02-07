import axios from 'axios'
import React from 'react'

export default function Option({deleteData,get}) {

  async function removeData(){
    const res = await axios.delete(`/removeCart/${deleteData}`)
    if(res.status===400 || !(res.data)){
      console.log("error")
    }else{
      console.log("cartItem deleted")
      get()
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
    <p style={{cursor:"pointer"}} onClick={()=>{
      removeData()
    }}>Delete</p><span>|</span>
    <p className='forremovemedia' style={{cursor:"pointer"}}>Save for Later</p><span>|</span>
    <p className='forremovemedia' style={{cursor:"pointer"}}>See more like this</p>
    </div>
  )
}
