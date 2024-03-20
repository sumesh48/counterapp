import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decriment, incriment, reset } from '../redux/counerSlice'

function Counter() {
const [range,setRange]=useState("")

const dispatch =useDispatch()

const count =useSelector((state)=>state.counter.value)

  return (
    
    <div className='d-flex justify-content-center mt-4 align-items-center w-100' style={{hight:'100vh'}}>
   <div className='shadow border rounded border-primary p-5'>
    <h3 className='text-center text-primary'>Counter Application</h3>

<h1 className='text-center  mt-4' style={{fontSize:'100px'}}>{count}</h1>
  <div className='mt-5 d-flex'>

    <button className='btn btn-success' onClick={()=>dispatch(incriment(Number(range)))}>increment</button>
    <button className='btn btn-danger ms-3' onClick={()=>dispatch(reset())}>Reset</button>
    <button className='btn btn-warning ms-3' onClick={()=>dispatch(decriment(Number(range)))}>Decrement</button>

  </div>
  <input onChange={(e)=>setRange(e.target.value)} type="text" placeholder='range' className='form-control mt-4' />

   </div>
    </div>
    
  )
}

export default Counter