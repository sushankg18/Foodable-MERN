import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const Card = () => {
    const btns = new Array(5).fill(1)
    return (
        <div style={styling.main}>
            <div style={styling.image_div}>
                <img style={styling.image} src='https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
            <div style={styling.text}>
                <p style={styling.text.p1}>BURGER</p>
                <div style={styling.text.div}>
                    <p>₹79</p>

                    <div style={styling.text.div.div}>

                        <select>
                            {
                                btns.map((i, idx)=>(
                                    <option>{idx + 1}</option>
                                ))
                            }

                        </select>

                        <select>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>

                </div>
                <button style={styling.text.button}> <IoCartOutline />Add to cart</button>
            </div>

        </div>
    )
}

const styling = {
    main: {
        width: "20rem",
        height: 'fit-content',
        overflow: "hidden",
        backgroundColor: "lightgray",
        borderRadius: ".7rem",
        paddingBottom: ".7rem"
    },
    image_div: {
        width: "100%",
        height: "14rem",
        overflow: 'hidden'
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    text: {
        padding: ".4rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        p1: {
            fontWeight: 'bold'
        },
        button: {
            border: "none",
            backgroundColor: "white",
            padding: '.4rem 1rem',
            borderRadius: ".4rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: '1rem',
            fontSize: "1rem",
            width: "fit-content",
            cursor : 'pointer'
        },
        div: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            div : {
                display: "flex",
                gap : '1rem'
            }
        }
    }
}
export default Card
