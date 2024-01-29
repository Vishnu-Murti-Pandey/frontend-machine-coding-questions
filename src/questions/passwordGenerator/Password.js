import React, { useEffect, useState } from 'react'
import './Pass.css'

const Password = () => {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(4);
    const [strength, setStrength] = useState("Poor");
    const [copy, setCopy] = useState("Copy");
    const [checkBox, setCheckBox] = useState([
        { title: "Include Uppercase", state: false },
        { title: "Include Lowercase", state: false },
        { title: "Include Number", state: false },
        { title: "Include Symbol", state: false }
    ]);

    const handleCopy = () => {
        setCopy("Copied..");

        let text = document.getElementById('passtext').innerHTML;
        const copyContent = async () => {
            try {
                await navigator.clipboard.writeText(text);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }
        copyContent();

        setTimeout(() => {
            setCopy("Copy");
        }, 500);
    }

    useEffect(() => {
        if (length < 4) {
            alert("Password cannot be less than 6 words");
            setLength(4);
        }
    }, [length])

    const handleCheckBox = (index) => {
        let newData;
        let currBox = "";
        if (checkBox[index].state) {
            checkBox[index].state = false;
            newData = structuredClone(checkBox);
            setCheckBox(newData);
            return;
        } else {
            checkBox[index].state = true;
            currBox = checkBox[index].title;
            newData = structuredClone(checkBox);
            setCheckBox(newData);
        }

        let selectedBoxes = newData.filter((item) => item.state === true);

        selectedBoxes.forEach(element => {
            if (element.title === 'Include Uppercase' && element.title === currBox) {
                createNewPassword("upper");
            } else if (element.title === 'Include Lowercase' && element.title === currBox) {
                createNewPassword("lower");
            } else if (element.title === 'Include Number' && element.title === currBox) {
                createNewPassword("number");
            } else if (element.title === 'Include Symbol' && element.title === currBox) {
                createNewPassword("symbol");
            }
        });
    }

    const createNewPassword = (key) => {
        console.log({ key });
        let newPassword = password;
        if (key === "upper") {
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)];
            newPassword = newPassword + randomLetter;
        } else if (key === "lower") {
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
            let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)];
            newPassword = newPassword + randomLetter;
        } else if (key === "number") {
            const number = "0123456789"
            let randomNumber = number[Math.floor(Math.random() * number.length)] + number[Math.floor(Math.random() * number.length)] + number[Math.floor(Math.random() * number.length)];
            newPassword = newPassword + randomNumber;
        } else if (key === "symbol") {
            const symbol = "!@<#*$%^&@*<$>:#?/*";
            let randomSymbol = symbol[Math.floor(Math.random() * symbol.length)] + symbol[Math.floor(Math.random() * symbol.length)] + symbol[Math.floor(Math.random() * symbol.length)];
            newPassword = newPassword + randomSymbol;
        }
        setPassword(newPassword);
    }

    return (
        <div className='passwordCont'>
            <div className='passAndCopy'>
                <div id='passtext'>{password}</div>
                <div className='pop-wrapper'>
                    {/* <div popover="auto" id="copyPopover">Copied!!</div> */}
                    <button popovertarget="copyPopover" className='copyBtn' onClick={handleCopy} type="button">{copy}</button>
                </div>
            </div>
            <div className='passAndCopy'>
                <div>Character Length</div>
                <div>{length}</div>
            </div>
            <input
                type="range"
                id="silder"
                value={length}
                min={1}
                max={18}
                onChange={(e) => setLength(e.target.value)}
            />
            <div className='includeGrid'>
                {
                    checkBox.map((item, idx) => (
                        <div id='boxWithLable'>
                            <input onClick={() => handleCheckBox(idx)} type='checkbox' id='checkBox'></input>
                            <label htmlFor="">{item.title}</label>
                        </div>
                    ))
                }
            </div>
            <div className='passAndCopy'>
                <div>Strength</div>
                <div>{strength}</div>
            </div>
            <button className='generateBtn' type="button">GENERATE PASSWORD</button>
        </div>
    )
}

export default Password