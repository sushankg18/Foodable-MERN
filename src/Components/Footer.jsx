import React from 'react'

const Footer = () => {
  return (
    <div style={styling.footer_main}>
      <h4>@ 2024 Foodable, Inc</h4>
    </div>
  )
}
const styling = {
    footer_main : {
        border :"1px solid lightgray",
        width : '100%',
        display : 'flex',
        justifyContent : "center",
        padding : '.6rem 1rem',
        position : "fixed",
        bottom : "0",
    }
}
export default Footer
