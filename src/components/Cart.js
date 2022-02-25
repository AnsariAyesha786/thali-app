import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'; 
import { RemoveItem } from '../redux/slice';
const Cart = () => {
  const thali=useSelector(state=>state.counter.thali)
  console.log(thali)
  const despatch=useDispatch()
  const Remove=(id)=>{
    despatch(RemoveItem(id))

  }
var sum=0
for(const item of thali){
  sum=sum+item.totalPrice
}
  return (
    <div className='container mx-3'>
<h1 className='text-center text-danger'>Your Food</h1>
<div className='row'>
{
    thali.map((ele,ind)=>(
        <div className='col-3'>
            <div className="card " key={ind} >
  <img src={ele.image} className="card-img-top" alt="..." width="100px" height="200px"/>
  <div className="card-body">
    <h5 className="card-title">{ele.name}</h5>
    <p className="card-text">Quantity: {ele.quantity}</p>
    <p>Price:{ele.price}</p>
    <p>totalPrice:{ele.totalPrice}</p>
    <button onClick={()=>Remove(ind)} className="btn btn-primary">Remove</button>
        
  </div>
  </div>
</div>
    
    
    
    )
    )
}
<h3 className='text-center text-success'>Your Sub total price :{sum}</h3>
</div>
    </div>
  )
}

export default Cart