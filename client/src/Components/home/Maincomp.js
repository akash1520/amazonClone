import React from 'react'
import './home.css'
import Banner from './Banner'
import Slide from './Slide'

export default function Maincomp() {

    return (
        <div>
            <div className="home_section">
                <div className="banner_part">
                    <Banner />
                </div>
                <div className="slide_part">
                    <div className="left_slide">
                        <Slide title="Deal of the Day" />
                    </div>
                    <div className='right_slide'>
                        <h4>Festive Latest Launches</h4>
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/ATFimagery_nov22_230x230._CB620157277_.jpg'/>
                        <a href='#'>See more</a>
                    </div>
                </div>
                
                <Slide title="Today's Deal"/>
                    <div className="center_img">
                        <img src="https://m.media-amazon.com/images/I/71g6i7uFs4L._SX3000_.jpg" alt=''/>
                    </div>
                <Slide title="Best Seller"/>
                <Slide title="Upto 80% off"/>

            </div>
        </div>
    )
}
