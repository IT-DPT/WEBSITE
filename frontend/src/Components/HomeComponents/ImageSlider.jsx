import React from "react";
import img1 from '../../Images/firstSlider-1.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ImageSlider() {
    return (
        <>
            <div className="w-[100%]  h-max  mr-0 bg-slate-500 justify-center" >
                <div>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        interval={1800}
                        showStatus={false}//1 of 3
                        showThumbs={false}
                        showArrows={true}
                        stopOnHover={true}>
                        <div>
                            <img src={img1} className="h-96 w-[100%]" />
                        </div>
                        <div>
                            <img src={img1} className="h-96 w-[100%]" />
                        </div>
                        <div>
                            <img src={img1} className="h-96 w-[100%]" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
