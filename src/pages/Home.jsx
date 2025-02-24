import React from 'react'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../redux/slices/cartSlice';


function Home() {

  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);

  const dispatch = useDispatch()
  
  return (
    <>
    <div>
    <div className='gap-2 p-2 grid lg:grid-cols-4 md:grid-cols-2 mt-14 mb-14'>
   {data?.length > 0?
    data?.map((item)=>(
   
      
       <div className='p-2 shadow-2xl rounded flex flex-col justify-between'>
        <div>
              <img src={item?.image} alt="" style={{width:"100%", height:"350px"}}/>
              <h2>{item?.title}</h2>
              <p>{item?.description}</p>
              <h3>Price: <span className='text-fuchsia-700'>${item?.price}</span></h3>
              </div>
              <div>
              <ul className='flex justify-between'>
                  <button onClick={()=>dispatch(addToWishlist(item))}><li className='bg-red-600 px-2 py-1 rounded hover:bg-red-500 cursor-pointer'><FontAwesomeIcon icon={faHeart}  className='text-white'/></li></button>
                  <button onClick={()=>dispatch(addToCart(item))}><li className='bg-green-500 px-2 py-1 rounded hover:bg-green-400'> <FontAwesomeIcon icon={faCartShopping}  className='text-white'/></li></button>
              </ul>
              </div>
          </div>

    
    ))
    
    :

    <p className='text-4xl text-violet-700'>Nothing to display</p>}
    </div>
    </div>
    </>
  )
}

export default Home