import React from "react";
import Slider from "react-slick"
import slide_img from '../images/slide_img.jpg'
import slide_img2 from '../images/slide_img2.jpg'
import slide_img3 from '../images/slide_img3.jpg'

function SilderComponent(){
    return(
        <>
            <Slider>
                <div><img src ={ slide_img }  alt="slide_img" /></div>
                <div><img src ={ slide_img2 }  alt="slide_img2" /></div>
                <div><img src ={ slide_img3 }  alt="slide_img3" /></div>
            </Slider>
        </>
    )
}

export default SilderComponent