import React, { useEffect } from 'react'
import './Web.css'

const Website = () => {

    const steps = ["4", "header", "8", "footer", "1"];
    let index = 0;

    const highlight = (id) => {
        document.querySelector(".box")?.remove();
        document.querySelector(".overlayEle")?.remove();

        const element = document.getElementById(id);
        const elementDimension = element.getBoundingClientRect();

        highlightHelper(elementDimension);
    }

    const highlightHelper = (elementDimension) => {

        const top = elementDimension.top;
        const left = elementDimension.left;
        const width = elementDimension.width;
        const height = elementDimension.height;

        const overlayEle = document.createElement("div");
        overlayEle.setAttribute("class", "overlayEle");
        overlayEle.style = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            top: ${top - 4}px;
            left: ${left - 4}px;
            transition: border .2s ease;
        `
        document.querySelector(".elements").appendChild(overlayEle);

        setTimeout(() => {
            overlayEle.style.border = `4px solid #000`
        })

        popover(elementDimension);
    }

    const popover = (elementDimension) => {
        const bottom = elementDimension.bottom;
        const left = elementDimension.left;
        const right = elementDimension.right;

        const box = document.createElement("div");
        box.setAttribute("class", "box");
        box.style = `
            position:absolute;
            width:200px;
            height:200px;
            top:${bottom + 5}px;
            right:${right}px;
            left:${((left + right) / 2) - 100}px;
            background:#fcba03;
        `

        box.appendChild(navigationButton());

        document.querySelector(".elements").appendChild(box);
    }

    const navigationButton = () => {

        const prev = document.createElement("button");
        prev.textContent = "Prev";

        prev.addEventListener("click", (e) => {
            if (index > 0) {
                highlight(steps[--index]);
            }
        });

        const next = document.createElement("button");
        next.textContent = "Next";
        next.addEventListener("click", (e) => {
            if (index < steps.length - 1) {
                highlight(steps[++index]);
            }
        });

        const fragment = document.createDocumentFragment();
        fragment.appendChild(prev);
        fragment.appendChild(next);

        return fragment;
    }

    useEffect(() => {
        highlight(steps[index]);
    }, [])

    return (
        <>
            <div className='webContainer'>
                <div id='header' className='header'>Header</div>
                <div className='elements'>
                    <div id='1' className="block">1</div>
                    <div id='2' className="block">2</div>
                    <div id='3' className="block">3</div>
                    <div id='4' className="block">4</div>
                    <div id='5' className="block">5</div>
                    <div id='6' className="block">6</div>
                    <div id='7' className="block">7</div>
                    <div id='8' className="block">8</div>
                    <div id='9' className="block">9</div>
                    <div id='10' className="block">10</div>
                </div>
                <div id='footer' className='footer'>Footer</div>
            </div>

        </>
    )
}

export default Website