import React from 'react'
import { useRef, useState } from "react";

const SearchWithAutoSuggestions = () => {

    const [hideSuggestionArea, setHideSuggestionArea] = useState(false);
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const inputRef = useRef();
    const suggestionRef = useRef();

    window.addEventListener("click", (e) => {
        if (e.target === inputRef.current || e.target === suggestionRef.current) {
            return;
        }
        setHideSuggestionArea(false);
    });

    const handleFocus = (e) => {
        if (e.target === inputRef.current && hideSuggestionArea) {
            return;
        }
        setHideSuggestionArea(true);
    }

    const APICall = async () => {
        const response = await fetch("https://random-word-api.herokuapp.com/word?number=10");
        const data = await response.json();
        setList(data);
    }

    const handleChange = (e) => {
        APICall();
        setInput(e.target.value);
    }

    const handleListItem = (e) => {
        setInput(e.target.innerText);
    }



    return (
        <>
            <input
                type="search" id="search"
                placeholder="Enter your query"
                onFocus={handleFocus}
                onChange={handleChange}
                value={input}
                ref={inputRef}
            />
            {
                hideSuggestionArea ?
                    <div id="suggestion-area" ref={suggestionRef} >
                        <ul>
                            {
                                list.map((item) => (
                                    <li onClick={handleListItem} >{item}</li>
                                ))
                            }
                        </ul>
                    </div> :
                    <></>
            }
        </>
    );
}

export default SearchWithAutoSuggestions