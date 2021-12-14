import React from 'react'
import '../App.css';
import { useParams } from 'react-router-dom';

const Hotspot = () => {
    const { hotspotAddress }  = useParams();
    return (
        <div className="App">
          {hotspotAddress}
        </div>
      )
    }

export default Hotspot
