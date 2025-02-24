import { faCartShopping, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


function Wishlist() {

  const wishlistArray = useSelector((state) => state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handleCart =(item)=>{
    dispatch(addToCart(item))
    dispatch(removeItem(item.id))
  }


  return (
    <>
      <h1 className='text-3xl text-center mt-7 text-fuchsia-800 '>Wishlist</h1>
      <div >
      <div className='px-2 py-2  gap-3 grid lg:grid-cols-4 md:grid-cols-2 mt-12 mb-12'>
        {wishlistArray?.length>0?
        wishlistArray?.map((item)=>(
        
          <div className='p-2 shadow-2xl rounded flex flex-col justify-between'>
            <div>
            <img src={item?.image} alt="" style={{ width: "100%" }} />
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <h3>Price: <span className='text-fuchsia-700'>${item?.price}</span></h3>
            </div>
            <div>
            <ul className='flex justify-between'>
              <button onClick={()=>dispatch(removeItem(item?.id))} ><li className='bg-red-600 px-2 py-1 rounded hover:bg-red-500 cursor-pointer'><FontAwesomeIcon icon={faTrash}  className='text-white'/></li></button>
              <button onClick={()=>handleCart(item)}><li className='bg-green-500 px-2 py-1 rounded hover:bg-green-400'> <FontAwesomeIcon icon={faCartShopping} className='text-white' /></li></button>
            </ul>
            </div>
          </div>
        
        )):
        <div style={{ width: "100%", height: "100vh" }} className='flex justify-center items-center'>
          <img src="https://th.bing.com/th/id/OIP.b92EIjMs-Fg3jeKjIA8AewAAAA?rs=1&pid=ImgDetMain" alt="" className='w-1/2' />
        </div>}
        </div>
      </div>

    </>
  )
}

export default Wishlist