import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import ListComp from './ListComp';

export default function DataFetcher() {

  const [data, setData] = useState('')


  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/data.json');
    const dataRes = await response.json()
    setData(dataRes)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <header>Create a functional component called DataFetcher.</header>
      <h1>{data.title}</h1>
      <span>{data.subtitle}</span>
      <h3>Product info</h3>
      <span>{data.info}</span>
      <h5>Color</h5>
       {data.colors && data.colors.map((color, index) => (
           <span key={index} style={{
            margin: "5px", 
            backgroundColor: color,
            width: "30px", 
            height: "30px", 
            borderRadius: "50%", 
            display: 'inline-block'
           }}
           className={data.currentColor === color ? 'active' : '' }>
           </span>
        ))}
        {data.listData && <ListComp listData={data.listData} />}

    </div>
  )
}
