import React from 'react'
import './Modal.css'

const Modal = ({ show, title, onClose, children }) => {
    return (
        show && (
            <div className='wrapper'>
                <div className='header'>
                    <div className='title'>{title}</div>
                    <span onClick={onClose} className='close'>X</span>
                </div>
                <div className='body'>
                    {children}
                </div>
            </div>
        )
    )
}

export default Modal