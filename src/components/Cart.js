import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { RemoveItem } from '../redux/slice';

const Cart = () => {
  const thali = useSelector(state => state.counter.thali)
  console.log(thali)
  const despatch = useDispatch()
  const Remove = (id) => {
    despatch(RemoveItem(id))

  }
  const order = () => {



    if (thali.length < 2) {
      Swal.fire({
        icon: 'error',

        title: 'Oops...😥😫',

        text: 'Order at least 2 item.',



      })

    } else {



      Swal.fire(

        'Ordered sucessfull💙💚🧡!',

        'You clicked the button!',

        'success'
      )
      thali.length = 0
    }

  }

  var sum = 0
  for (const item of thali) {
    sum = sum + item.totalPrice
  }
  
  return (
    <div className='container mx-3'>
      <h1 className='text-center text-danger'>Your Food</h1>
      <div className='row'>
        {
          thali.map((ele, ind) => (
            <div className='col-4'>
              <div className="card " key={ind} >
                <img src={ele.image} className="card-img-top" alt="..." width="100px" height="200px" />
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">Quantity: {ele.quantity}</p>
                  <p>Price: $ {ele.price}</p>
                  <p>TotalPrice: $ {ele.totalPrice}</p>
                  <button onClick={() => Remove(ind)} className="btn btn-primary">Remove</button>

                </div>
              </div>
            </div>



          )
          )
        }
        <div className='container text-center  m-2 p-2'>
          <button className='btn btn-success' onClick={order}>Order Now <span className='text-warning'> ${sum}</span></button>
        </div>
      </div>
    </div>
  )
}

export default Cart