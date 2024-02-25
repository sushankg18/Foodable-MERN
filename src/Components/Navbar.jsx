import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div style={styling.nav_main}>
            <Link to={'/'} style={styling.logo}>FOODABLE</Link>
            <div style={styling.nav_right}>
                <Link to={'/'} style={styling.nav_right_items}>Home</Link>
                <Link to={'/loginuser'} style={styling.nav_right_items}>Login</Link>
                <Link to={'/createuser'} style={styling.nav_right_items}>Sign up</Link>
            </div>
        </div>
    )
}
const styling = {
    nav_main: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: '.5rem 2rem',
        backgroundColor: "#fff",
        borderBottom : "1px solid black"
    },
    logo: {
        fontWeight: "bold",
        color: 'darkgreen',
        cursor: 'pointer',
        fontSize: "2rem",
        textDecoration : "none"
    },
    nav_right: {
        display: 'flex',
        gap: '3rem',
    },
    nav_right_items: {
        cursor: 'pointer',
        fontSize: "1.1rem",
        textDecoration: 'none',
        color: 'black',
        fontWeight: '700'
    }
}

export default Navbar
