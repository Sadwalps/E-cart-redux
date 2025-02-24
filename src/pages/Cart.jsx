import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const [total, setTotal]=useState(0)
  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getTotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray?.map((item)=>item.price).reduce((n1,n2)=>n1+n2))
    }
  }
  useEffect(()=>{
    getTotal()
  },[cartArray])
  const handleCart=()=>{
    alert(`Order placed successfully`)
    dispatch(emptyCart())
    navigate('/')
  }
  
  return (
    <>
    <h1 className='text-3xl text-center mt-7 text-fuchsia-800 '>Cart</h1>

  
    {cartArray?.length>0?
    <div className='lg:grid grid-cols-[repeat(1,4fr)_repeat(1,2fr)] mt-2.5 '>
      <div className='p-5'>
        <table style={{width:"100%"}}>
          <tr>
            <th className='lg:p-5 p-3 text-center border-1 border-b-gray-200 bg-gray-300'>#</th>
            <th className='lg:p-5 p-3 text-center border-1 border-b-gray-200 bg-gray-300'>Title</th>
            <th className='lg:p-5 p-3 text-center border-1 border-b-gray-200 bg-gray-300'>Image</th>
            <th className='lg:p-5 p-3 text-center border-1 border-b-gray-200 bg-gray-300'>Price</th>
            <th className='lg:p-5 p-3 text-center border-1 border-b-gray-200 bg-gray-300'>Action</th>
          </tr>
          {cartArray?.map((item, index)=>(
          <tr>
            <th className='lg:p-5 p-3 border-1 border-b-gray-200 text-center'>{index+1}</th>
            <td className='lg:p-5 p-3 border-1 border-b-gray-200 text-center'><p>{item?.title}</p></td>
            <td className='lg:p-5 p-3 border-1 border-b-gray-200 flex justify-center items-center'><img src={item?.image} alt="" style={{height:"50px"}}/></td>
            <td className='lg:p-5 p-3 border-1 border-b-gray-200 text-center'><h3>$ {item?.price}</h3></td>
            <td className='lg:p-5 p-3 border-1 border-b-gray-200 text-center'><button onClick={()=>dispatch(removeFromCart(item?.id))} className='btn bg-red-600 text-white rounded px-2 py-1 hover:bg-red-500 cursor-pointer'><FontAwesomeIcon icon={faTrash} /></button></td>
          </tr>
        ))}
        </table>
      </div>
      <div className='lg:p-7 p-3'>
        <div style={{width:"100%"}} className='p-2 shadow-2xl' >
          <h1 className='text-2xl text-center'>
            Cart Summary
          </h1>
          <h3 className='mt-2'>Total number of Products :{cartArray?.length} </h3>
          <h3>Grand Total : ${total}</h3>
          
          <button onClick={handleCart} className='btn text-white bg-green-500 mt-2 lg:w-100 w-75 text-center py-2'>checkout</button>
        </div>
      </div>

    </div>:
<h1 className='text-violet-800 text-4xl font-bold text-center'>cart is empty</h1>
    }
    </>
  )
}

export default Cart