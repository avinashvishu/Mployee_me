import React, { useEffect, useState } from 'react'

const GaugeProvider = ({valueStart,valueEnd,children}) => {
    const[value,setValue]=useState(valueStart);
    useEffect(()=>{
        setValue(valueEnd)
    },[valueEnd])
  return  children(value)
}

export default GaugeProvider