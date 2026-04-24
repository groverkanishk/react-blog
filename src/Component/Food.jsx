import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Food = () => {
  const FoodData = Data.filter((item) => item.category === 'Food')
  console.log(FoodData);
  
  return (
    <div>
      {FoodData.map((fooddata) => (
        <>
          <h1>{fooddata.title}</h1>
          <img src={fooddata.img_url} />
        </>
      ))}
    </div>
  )
}

export default Food
