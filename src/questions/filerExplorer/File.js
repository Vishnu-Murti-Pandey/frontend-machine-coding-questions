import React, { useState } from 'react'
import './File.css'

const File = ({ explorer }) => {

    const [explorerData, setExplorerData] = useState(explorer);
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState({
        isVisible: false,
        isfolder: false
    });

    const handleFolder = () => {
        const data = {
            id: `${Number(explorer.id) + 1}`,
            name: `newFolder ${Number(explorer.id) + 1}`,
            isFolder: true,
            items: []
        }
        explorer.items.unshift(data);
        const updatedData = structuredClone(explorer);
        setExplorerData(updatedData);
    }

    const handleFile = () => {
        const data = {
            id: `${Number(explorer.id) + 1}`,
            name: `newFile ${Number(explorer.id) + 1}`,
            isFolder: false,
            items: []
        }
        explorer.items.unshift(data);
        const updatedData = structuredClone(explorer);
        setExplorerData(updatedData);
    }

    console.log({ explorerData });

    return (

        explorerData.isFolder ? (
            <div>
                <div className='folder'>
                    <span onClick={() => setShow(!show)}>📁 {explorerData.name}</span>
                    <div className='btns'>
                        <button onClick={() => handleFolder()}>Folder +</button>
                        <button onClick={() => handleFile()}>File +</button>
                    </div>
                </div>
                <div style={{ display: show ? 'block' : 'none' }} >
                    {
                        explorerData?.items.map((item) => {
                            return (
                                <File explorer={item} />
                            )
                        })
                    }
                </div>
            </div >
        ) : (
            <span className='file' >📄 {explorerData.name}</span>
        )
    )
}

export default File