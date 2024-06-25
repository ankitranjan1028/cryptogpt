// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=>{
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "€"});
        break;
      }
      case "inr": {
        setCurrency({name: "inr", symbol: "₹"});
        break;
      }
      default : {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
    }
  }

  return (
    <div className='navbar'>
       <Link to={'/'}>
         <img src={logo} alt="" className='logo' />
        </Link>
        <ul>
        <Link to={'/'}> <li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="inr">IND</option>
                <option value="usa">USA</option>
                <option value="eur">EUR</option>
            </select>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar
