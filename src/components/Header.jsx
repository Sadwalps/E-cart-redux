import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

  const wishlistArray =useSelector((state)=>state.wishlistReducer)
  const cartArray = useSelector((state)=>state.cartReducer)
  const [show, setShow]=useState(false)
  return (
    <>
    <div className='py-4 md:px-20 lg:px-4  bg-violet-800 text-white flex justify-between'>
      
     <div>
      <div className='flex items-center gap-2 font-semibold lg:text-2xl text-xl ps-2'>
                <FontAwesomeIcon icon={faCartShopping} />
                <h1>E-CART</h1>
                </div>
     </div>
     <button onClick={()=> setShow(!show)} className='lg:hidden me-2 text-2xl'><FontAwesomeIcon icon={faBars} /></button>
     
    {show &&
     
    <div className=' flex gap-3 md:hidden bg-violet-600 justify-center items-center' style={{position:"absolute", top:"60px", width:"100%",height:"80px"}}>
      <Link to={'/wishlist'}><button className='border-2 border-white bg-violet-800 text-white flex items-center gap-2 px-4 py-1.5 rounded hover:bg-white cursor-pointer hover:text-violet-800'>
      <FontAwesomeIcon icon={faHeart}  className='text-red-600'/>
        <h2>Wishlist</h2>
        <span className='bg-white text-black px-2 rounded'>{wishlistArray?.length}</span>
        
      </button></Link>
      <Link to={'/cart'}><button className='border-2 border-white bg-violet-800 text-white flex items-center gap-2 px-4 py-1.5 rounded hover:bg-white   cursor-pointer hover:text-violet-800'>
      <FontAwesomeIcon icon={faCartShopping}  className='text-green-500'/>Cart
      <span className='bg-white text-black px-2 rounded'>{cartArray.length}</span>
      </button></Link>
     </div>}

     <div className='md:flex hidden gap-4 ms-auto'>
      <Link to={'/wishlist'}><button className='border-2 border-white bg-violet-800 text-white flex items-center gap-2 px-4 py-1.5 rounded hover:bg-white cursor-pointer hover:text-violet-800'>
      <FontAwesomeIcon icon={faHeart}  className='text-red-600'/>
        <h2>Wishlist</h2>
        <span className='bg-white text-black px-2 rounded'>{wishlistArray?.length}</span>
        
      </button></Link>
      <Link to={'/cart'}><button className='border-2 border-white bg-violet-800 text-white flex items-center gap-2 px-4 py-1.5 rounded hover:bg-white cursor-pointer hover:text-violet-800'>
      <FontAwesomeIcon icon={faCartShopping}  className='text-green-500'/>Cart
      <span className='bg-white text-black px-2 rounded'>{cartArray.length}</span>
      </button> </Link>
     </div>
    </div>
    </>
  )
}

export default Header