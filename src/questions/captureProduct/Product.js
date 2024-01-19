import { useEffect } from 'react';
import './Product.css'

const Product = () => {

    // check if element is in viewport or not
    // collect all the elements in an array
    // listen the scroll event with debouncing

    const isInviewPort = (block) => {

        const elementDim = block.getBoundingClientRect();

        const height = window.innerHeight;
        const width = window.innerWidth;

        return elementDim.top > 0 && elementDim.left > 0 && elementDim.bottom <= height && elementDim.right <= width
    }

    const detect = () => {
        const blocks = document.querySelectorAll(".proBlock");
        let allBlocks = [];

        blocks.forEach((block) => {
            if (isInviewPort(block)) {
                allBlocks.push(block.innerText);
            }
        })

        console.log(allBlocks);
    }

    function debounce(callback, delay) {
        let timer
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback();
            }, delay)
        }
    }

    const debounceDetect = debounce(detect, 1000);

    window.addEventListener("scroll", debounceDetect, false);


    return (
        <div className='proWrap'>
            <div className="proBlock">1</div>
            <div className="proBlock">2</div>
            <div className="proBlock">3</div>
            <div className="proBlock">4</div>
            <div className="proBlock">5</div>
            <div className="proBlock">6</div>
            <div className="proBlock">7</div>
            <div className="proBlock">8</div>
            <div className="proBlock">9</div>
            <div className="proBlock">10</div>
            <div className="proBlock">11</div>
            <div className="proBlock">12</div>
            <div className="proBlock">13</div>
            <div className="proBlock">14</div>
            <div className="proBlock">15</div>
            <div className="proBlock">16</div>
            <div className="proBlock">17</div>
            <div className="proBlock">18</div>
        </div>
    )
}

export default Product