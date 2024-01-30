
import React, { useState } from 'react'
import './GridLights.css'

const GridLights = () => {

  const [grids, setGrids] = useState([
    { id: 1, state: false }, { id: 2, state: false }, { id: 3, state: false }, { id: 4, state: false },
    { id: 5, state: false }, { id: 6, state: false }, { id: 7, state: false }, { id: 8, state: false }
  ]);

  const [track, setTrack] = useState([]);

  const handleGrid = async (grid) => {
    if (!grid.state) {
      document.getElementById(grid.id).style.backgroundColor = "green";
    }

    let newGrid = structuredClone(grids);
    for (let i = 0; i < newGrid.length; i++) {
      if (grid.id === newGrid[i].id) {
        newGrid[i].state = true;
        track.push(grid.id);
      }
    }
    setTrack(track);
    setGrids(newGrid);

    if (allGreen(newGrid)) {
      for (let i = track.length; i >= 1; i--) {
        await sleep(500)
        document.getElementById(track[i - 1]).style.backgroundColor = "white";
      }
      let currGrid = structuredClone(newGrid);
      for (let i = 0; i < currGrid.length; i++) {
        currGrid[i].state = false;
      }
      setGrids(currGrid);
    }
  }

  const sleep = (delay) => {
    return new Promise((resolve, reject) => setTimeout(resolve, delay));
  }

  const allGreen = (newGrid) => {
    for (let i = 0; i < newGrid.length; i++) {
      if (!newGrid[i].state) {
        return false;
      }
    }
    return true;
  }

  // console.log({ grids, track });

  return (
    <div className='grid-cont'>
      <div className='grid-wrapp' >
        {
          grids.map((item) => (
            <div onClick={() => handleGrid(item)} className='lightBox' id={item.id}></div>
          ))
        }

      </div>
    </div>
  )
}

export default GridLights
