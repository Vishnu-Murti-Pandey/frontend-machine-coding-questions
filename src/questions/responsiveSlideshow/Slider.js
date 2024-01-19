import React, { useState } from 'react'
import './Silder.css'

const Slider = ({ images }) => {

    const [currImages, setCurrImages] = useState(images);
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prev) => {
            if (prev === 0) {
                return prev;
            } else {
                return prev = prev - 1;
            }
        });
    }

    const handleNext = () => {
        setIndex((next) => {
            if (next === currImages.length - 1) {
                return next;
            } else {
                return next = next + 1;
            }
        });
    }

    const handleBallClick = (index) => {
        setIndex(index);
    }

    return (
        <div className='main'>
            <div className='img_container'>
                <img className='image' src={currImages[index].image_url} alt={currImages[index].caption} />
                <div className='nextAndPrev'>
                    <div onClick={handlePrev} className='perv'>{"<"}</div>
                    <div onClick={handleNext} className='next'>{">"}</div>
                </div>
            </div>
            <div className='ball_Container'>
                {
                    images.map((item, idx) => (
                        <div
                            onClick={() => handleBallClick(idx)}
                            className='ball'
                            style={{ backgroundColor: `${index === idx ? "aqua" : "grey"}` }}
                        ></div>
                    ))
                }
            </div>
        </div>
    )
}


export default Slider