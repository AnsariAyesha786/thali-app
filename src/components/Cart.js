import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'; 
import { RemoveItem } from '../redux/slice';
const Cart = () => {
  const thali=useSelector(state=>state.counter.thali)
  const despatch=useDispatch()
//   const[arr,setArr]=useState([])
  const Remove=(id)=>{
    despatch(RemoveItem(id))

  }
//   {
//       thali.map((e)=>{
//           let a=[]
//           a.push(e.totalPrice)
//          console.log(a)
          
//       })
//     }
  return (
    <div className='container mx-3'>
<h1 className='text-center text-danger'>Your Food</h1>
<div className='row'>
{
    thali.map((ele,ind)=>(
        
            <div className="card col-3" key={ind} >
  <img src={ele.image} className="card-img-top" alt="..." width="100px" height="200px"/>
  <div className="card-body">
    <h5 className="card-title">{ele.name}</h5>
    <p className="card-text">Quantity: {ele.quantity}</p>
    <p>{ele.price}</p>
    <p>{ele.totalPrice}</p>
        <a href="#" onClick={()=>Remove(ind)} className="btn btn-primary">Remove</a>
  </div>
</div>
    
    
    
    )
    )
}

</div>
    </div>
  )
}

export default Cart