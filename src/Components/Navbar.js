import React from 'react'
import Logo from '../Assets/logo.svg'
import { BsCart, BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Box, Drawer, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useState } from 'react'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon/>,
        },
        {
            text: "About",
            icon: <InfoIcon/>,
        },
        {
            text: "Testimonials",
            icon: <CommentRoundedIcon/>,
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon/>,
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon/>,
        },
    ];


    


  return <nav>
    <div className='nav-logo-container'>
        <img src={Logo} alt="" />
    </div>
    <div className='navbar-links-container'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href="">
            <BsCart2 className="navbar-cart-icon"/>
        </a>
        <button className='primary-button'>
            Booking Now
        </button>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={ () => setOpenMenu(true)}/>
        </div>
    </div>
  </nav>
}

export default Navbar