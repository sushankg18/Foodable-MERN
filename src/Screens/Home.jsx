import React from 'react'
import Card from '../Components/Card'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div style={styling.main} >
      <Card />
    </div>
  )
}

const styling = {
    main : {
        padding : "1rem 2rem"
    }
}
export default Home
