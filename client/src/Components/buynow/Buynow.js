import { Divider } from '@mui/material'
import React from 'react'
import './buynow.css'
import Option from './Option'
import Right from './Right'
import Subtotal from './Subtotal'

export default function Buynow() {
  return (
    <div className='buynow_section'>
    <div className="buynow_container">
        <div className="left_buy">
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
            <span className="leftbuyprice">Price</span>
            <Divider/>
            <div className="item_container">
                <img src="/earphone.jpg " alt=''/>
                <div className="item_details">
                    <h3>Molife sense 500 smart watch</h3>
                    <h3>Smart Watch</h3>
                    <h3 className='differentprice'>$4000</h3>
                    <p className='unusuall'>Usually dispatched in 5 days</p>
                    <p>Eligble for free Shipping</p>
                    <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"/>
                    <Option/>
                </div>
                <h3 className="item_price">$4985</h3>
            </div>
            <Divider/>
            <Subtotal/>
        </div>
        <Right/>
    </div>
    </div>
  )
}
