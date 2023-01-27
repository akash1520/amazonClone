import { Divider } from '@mui/material'
import React from 'react'
import './cart.css'

export default function Cart() {
    return (
        <div className='cart_section'>
            <div className="cart_container">
                <div className="left_cart">
                    <img src='' alt='cart_image' />
                    <div className="cart_btn">
                        <button className='cart_btn1'>Add to Cart</button>
                        <button className='cart_btn2'>Buy Now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h3>Fitness Gear</h3>
                    <h4>Piegon favourite electric kettle</h4>
                    <Divider />
                    <p className="mrp">M.R.P.</p>
                    <p>Deal of the Day: <span style={{ color: '#B12704' }}>$724</span></p>
                    <p>You Save: <span style={{ color: '#B12704' }}>$504 (48%)</span></p>
                    
                    <div className="discount_box">
                        <h5>Discount: <span style={{ color: '#111' }}>Extra 48% Off</span></h5>
                        <h4>Free Delivery: <span style={{ color: '#111',fontWeight:600 }}>Oct 10-20</span> Details</h4>
                        <p>Fastest Delivery: <span style={{color:"#111",fontWeight:600}}>Tommorow 4 P.M.</span></p>
                    </div>
                    <p className="description">
                        About the Item: <span style={{color:"#565959", fontSize:14, fontWeight:500, letterSpacing:".5px"}}>By default, HTML 5 input field has attribute type=”number” that is used to get input in numeric format. Now forcing input field type=”text” to accept numeric values only by using Javascript or jQuery. You can also set type=”tel” attribute in the input field that will popup numeric keyboard on mobile devices. There are so many other ways to force the input field to take input-only numbers.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
