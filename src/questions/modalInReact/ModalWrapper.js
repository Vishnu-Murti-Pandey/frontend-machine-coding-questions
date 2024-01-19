import React, { useState } from 'react'
import Modal from './Modal'

const ModalWrapper = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className='backdrop' onClick={() => setShow(false)}></div>
            <div className='container'>
                <button
                    style={{ padding: "5px", cursor: 'pointer' }}
                    onClick={() => setShow(!show)}
                >
                    {show ? "Close Model" : "Open Modal"}
                </button>
                {show &&
                    <Modal show={show} title="Modal" onClose={() => setShow(false)}>
                        <h2>Open Modal</h2>
                    </Modal>
                }

            </div>
        </>
    )
}

export default ModalWrapper