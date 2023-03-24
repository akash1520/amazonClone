import React from 'react'
import Carousel from 'react-material-ui-carousel'

export default function Banner() {

    const data = [
        "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
        " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
    ]

    return (
        <Carousel className='carasousel' autoPlay animation indicators navButtonsAlwaysVisible cycleNavigation
            navButtonsProps={{
                style:{
                    backgroundColor:"#fff",
                    color:"#4949",
                    borderRadius:0,
                    marginTop:-22,
                    height:"104px"
                }
            }}>

            {
                data.map((image, i) => {
                    return (
                        
                            <img src={image} alt=" " key={i} className='banner_img' />
                        
                    )
                })
            }
        </Carousel>
    )
}
