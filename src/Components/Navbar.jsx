import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('AuthToken');
        window.location.reload()
    }

    return (
        <div style={styling.nav_main}>
            <Link to={'/'} style={styling.logo}>FOODABLE</Link>
            <div style={styling.nav_right}>
                <Link to={'/'} style={styling.nav_right_items}>Home</Link>
                {
                    (localStorage.getItem('AuthToken')) ? <p style={styling.logoutBtn} onClick={handleLogout}>Logout</p> : (
                        <>
                            <Link to={'/loginuser'} style={styling.nav_right_items}>Login</Link>
                            <Link to={'/createuser'} style={styling.nav_right_items}>Sign up</Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}
const styling = {
    nav_main: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: '.8rem 2rem',
        backgroundColor: "#9966ff",
        borderBottom: "1px solid black"
    },
    logo: {
        fontWeight: "bold",
        color: 'white',
        cursor: 'pointer',
        fontSize: "2.4rem",
        textDecoration: "none"
    },
    nav_right: {
        display: 'flex',
        gap: '3rem',
    },
    nav_right_items: {
        cursor: 'pointer',
        fontSize: "1.1rem",
        textDecoration: 'none',
        color : "white",
        fontWeight: '700'
    },
    logoutBtn :{
        cursor : "pointer",
        fontWeight : "bold",
        color : "white"
    }
}

export default Navbar
