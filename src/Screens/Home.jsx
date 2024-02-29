import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Footer from '../Components/Footer'

const Home = () => {

  const [foodItems, setFoodItems] = useState([])
  const [foodCategory, setFoodCategory] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch('http://localhost:5000/api/foodData', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        }
      });
      response = await response.json();
      setFoodItems(response[0])
      setFoodCategory(response[1])
    }
    fetchData();
  }, [])
  return (
    <div style={styling.main} >
      {
        foodCategory.map((item, idx) => (
          <div>
            <h1>{item.CategoryName}</h1>
            <hr style={{margin : "1rem"}} />
            <div style={{display: "flex", gap : "1rem", justifyContent : 'space-around', flexWrap : 'wrap', padding: "1rem"}}>
              {
                foodItems.filter((data) => data.CategoryName === item.CategoryName)
                  .map(filterItem => {
                    return (
                      <Card
                        image={filterItem.img}
                        title={filterItem.name}
                        desc={filterItem.description}
                        options={filterItem.options[0]}
                      />
                    )
                  })
              }
            </div>
          </div>
        ))

      }

    </div>
  )
}

const styling = {
  main: {
    padding: "2rem"
  }
}
export default Home
