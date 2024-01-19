import React, { useEffect, useState } from 'react'
import './TodoList.css'

export const TodoList = () => {

    const [allData, setAllData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState();

    useEffect(() => {
        if (localStorage.getItem("listData")) {
            const data = JSON.parse(localStorage.getItem("listData"));
            setAllData(data);
        }
    }, [])

    const submitText = (e) => {
        if (e.keyCode === 13) {
            const value = e.target.value;
            let currData = [];
            const newData = {
                id: Math.random().toString(36).substring(2, 9),
                value: value,
                checked: false
            }
            currData.push(newData);
            if (localStorage.getItem("listData")) {
                const data = JSON.parse(localStorage.getItem("listData"));
                currData.push(...data);
            }

            setAllData(currData);
            localStorage.setItem("listData", JSON.stringify(currData));
        }
    }

    const handleCheckBox = (id) => {
        const localData = JSON.parse(localStorage.getItem("listData"));

        const newData = localData.map((item) => {
            if (item.id === id) {
                item.checked = item.checked ? false : true;
            }
            return item;
        });

        setAllData(newData);
        localStorage.setItem("listData", JSON.stringify(newData));
    }

    const handleDelete = (index) => {
        const localData = JSON.parse(localStorage.getItem("listData"));
        localData.splice(index, 1);

        setAllData(localData);
        localStorage.setItem("listData", JSON.stringify(localData));
    }

    const handleDoubleClick = (value) => {
        setIsEditing(true);
        setInput(value);
    }

    const handleBlur = (e) => {
        setIsEditing(false);
    }

    const handleChange = (e, id) => {
        const localData = JSON.parse(localStorage.getItem("listData"));

        const newData = localData.map((item) => {
            console.log(item.id, id);
            if (item.id === id) {
                item.value = e.target.value;
                setInput(e.target.value);
            }
            return item;
        });

        setAllData(newData);
        localStorage.setItem("listData", JSON.stringify(newData));
    }

    console.log({ isEditing });

    return (
        <div className='todo-wrapper'>
            <div className='inputBox'>
                <input onKeyUp={submitText} type="text" placeholder='What needs to be done?' id="input" />
            </div>
            {
                allData.map((item, index) => (
                    <div className='inputAndCheckBoxWrapper'>
                        {!isEditing ? <input checked={item.checked} type="checkbox" id="checkbox" onClick={() => handleCheckBox(item.id)} /> : <></>}
                        <div onDoubleClick={() => handleDoubleClick(item.value)}>
                            {
                                isEditing ?
                                    (
                                        <input
                                            onBlur={handleBlur}
                                            onChange={(e) => handleChange(e, item.id)}
                                            value={input}
                                            style={{ textDecoration: `${item.checked ? 'line-through' : 'none'}` }}
                                            type="text" id="editInput" />

                                    ) : (
                                        <span style={{ textDecoration: `${item.checked ? 'line-through' : 'none'}` }}>{item.value}</span>
                                    )
                            }
                        </div>
                        {!isEditing ? <div disabled={isEditing} onClick={() => handleDelete(index)} className='delete'>X</div> : <></>}

                    </div>
                ))
            }

        </div>
    )
}
