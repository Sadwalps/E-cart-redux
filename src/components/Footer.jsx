import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
    <div className='py md:px-20 px-10 lg:py-12 py-7 bg-violet-800 text-white md:grid  grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] '>
        <div className=''>
          <div className='flex items-center gap-2 font-semibold text-2xl '>
          <FontAwesomeIcon icon={faCartShopping} />
          <h1>E-CART</h1>
          </div>
          <p className='mt-2 lg:pe-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis sunt quos voluptatibus eaque soluta deserunt iste reiciendis odit rerum non quam nisi reprehenderit ex </p>
        </div>
        <div className='lg:ps-6'>
          <h1 className='font-semibold text-2xl'>Links</h1>
          <ul className='flex flex-col mt-2'>
            <li>Home</li>
            <li>Wishlist</li>
            <li>Cart</li>
          </ul>
        </div>
        <div className=''>
        <h1 className='font-semibold text-2xl'>Guides</h1>
          <ul className='flex flex-col mt-2'>
            <li>React</li>
            <li>React Bootstrap</li>
            <li>Bootswatch</li>
          </ul>
        </div>
        <div className=''>
        <h1 className='font-semibold text-2xl'>Contact Us</h1>
        <div className='mt-2 grid  grid-cols-[repeat(1,2fr)_repeat(1,1fr)] gap-2'>
          <input type="text" className='bg-amber-50 border-0 rounded p-2 text-black' placeholder='Email Id' />
          <button className='btn text-white bg-amber-600 p-2 rounded'>Subscribe</button>
        </div>
        <div>
          <ul className='flex  justify-between mt-2'>
            <li className='text-2xl'><FontAwesomeIcon icon={faTwitter} /></li>
            <li className='text-2xl'><FontAwesomeIcon icon={faLinkedinIn} /></li>
            <li className='text-2xl'><FontAwesomeIcon icon={faFacebook} /></li>
            <li className='text-2xl'><FontAwesomeIcon icon={faInstagram} /></li>
          </ul>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer