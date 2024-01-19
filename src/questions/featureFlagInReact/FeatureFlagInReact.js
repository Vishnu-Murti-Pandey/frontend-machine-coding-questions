import React, { useState } from 'react'
import { TheamFlag } from './context/TheamFlag'
import Theam from './Theam';

// To enable or Disbale the feature using a flag
const FeatureFlagInReact = () => {

    const [theam, setTheam] = useState('light');

    return (
        <TheamFlag.Provider value={{ theam, setTheam }}>
            <Theam />
        </TheamFlag.Provider>
    )
}

export default FeatureFlagInReact