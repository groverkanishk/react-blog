import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Technology = () => {
  const TechnologyData = Data.filter((item) => item.category === 'Technology')
  console.log(TechnologyData);
  
  return (
    <div>
      {TechnologyData.map((techdata) => (
        <>
          <h1>{techdata.title}</h1>
          <img src={techdata.img_url} />
        </>
      ))}
    </div>
  )
}

export default Technology
