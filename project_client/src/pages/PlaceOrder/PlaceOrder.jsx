import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount,food_list,cartItems,url} = useContext(StoreContext)
  
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  

  const onChangHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event)=>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    console.log(orderItems)
  }

 

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
        <input name='firstName' onChange={onChangHandler} value={data.firstName}type="text" placeholder='First name'/>
        <input name='lastName' onChange={onChangHandler} value={data.lastName} type="text" placeholder='Last name'/>
      </div>
      <input name='email' onChange={onChangHandler} value={data.email} type="email" placeholder='Email address'/>
      <input name='street' onChange={onChangHandler} value={data.street} type="text" placeholder='Street'/>

      <div className="multi-fields">
        <input name='city' onChange={onChangHandler} value={data.city} type="text" placeholder='City'/>
        <input name='state' onChange={onChangHandler} value={data.state} type="text" placeholder='State'/>
      </div>

      <div className="place-order-right">
        <input name='zipcode' onChange={onChangHandler} value={data.zipcode} type="text" placeholder='Zipcode'/>
        <input name='country' onChange={onChangHandler} value={data.country} type="text" placeholder='Country'/>
      </div>
      <input name='phone' onChange={onChangHandler} value={data.phone} type="text" placeholder='phone'/>
      </div>
      

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <b>Total</b>
            <b> {getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      
      </div>
      
    </form>
  )
}

export default PlaceOrder