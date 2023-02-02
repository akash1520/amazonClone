import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from "@mui/material/Avatar"
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
// import { LoginContext } from '../context/ContextProvider';

export default function Navbar() {

    // const {account,setAccount}= useContext(LoginContext)
    const [account,setAccount]=useState();

    const navData = async (id) => {
        const checkRes = await axios.post("/auth")
        // console.log(checkRes.data.carts)

        if (checkRes.status !== 201) {
            alert("No data available!!")
        } else {
            setAccount(checkRes.data)
        }
    }

    useEffect(()=>{navData();})

    return (
        <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                        <NavLink to="/"><img src='/amazon_PNG25.png' alt='' /></NavLink>
                    </div>
                    <div className="nav_searchbar">
                        <input type="text" name="" id="" />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <NavLink to="/login">Sign In</NavLink>
                    </div>
                    <div className="cart_btn">
                        {account ? <NavLink to="/buynow">
                            <Badge badgeContent={account.carts.length} color="primary">
                                <ShoppingCartIcon id="icon" />
                            </Badge>
                        </NavLink>:
                        <NavLink to="/login">
                            <Badge badgeContent={0} color="primary">
                                <ShoppingCartIcon id="icon" />
                            </Badge>
                        </NavLink>
                        }

                        <p>Cart</p>
                        {
                            account ?<Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar>:
                            <Avatar className='avtar' />
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}
