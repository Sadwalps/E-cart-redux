import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Cards() {
  return (
    <div className='p-2 shadow-2xl rounded'>
        <img src="https://netstorage-briefly.akamaized.net/images/904253bb0958a15a.jpg?imwidth=900" alt="" style={{width:"100%"}}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam magnam iste blanditiis velit expedita praesentium quasi debitis magni quam.</p>
        <h3>Price: <span className='text-fuchsia-700'>$9.99</span></h3>
        <ul className='flex justify-between'>
            <li className='bg-red-600 px-2 py-1 rounded hover:bg-red-500 cursor-pointer'><FontAwesomeIcon icon={faHeart}  className='text-white'/></li>
            <li className='bg-green-500 px-2 py-1 rounded hover:bg-green-400'> <FontAwesomeIcon icon={faCartShopping}  className='text-white'/></li>
        </ul>
    </div>
  )
}

export default Cards