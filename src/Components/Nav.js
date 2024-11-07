import { FaCartPlus } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";


const Nav = (props) => {

  const [isOpen, setIsOpen] = useState(false) 
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const handleToggle = () => {
      setIsOpen(!isOpen)

  }

  return (
    <>
    <div className='container'>

      <div>
        <h1>
            <FaCarSide />
            <span className='logo'>P</span>
            tech
            
        </h1>
      </div>


      <div>
        <form className='search'>
          <input type="text" value={props.query} onChange={e => props.setQuery(e.target.value.toLowerCase())} placeholder="Search..." />
        </form>
      </div>

      <div className='cartIcon'>
        <Link to='cart' > <FaCartPlus/> {`  ${totalQuantity}`} </Link>
      </div>
      < RxHamburgerMenu className="hamburger-icon" onClick={handleToggle} />


      <nav className={isOpen ? "active " : "  "} >
        <ul className='ul'>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/About'>About</Link> </li>
          <li> <Link to='/Contact'>Contact</Link></li>
        </ul>
      </nav>

    </div>
    </>
  )
}

export default Nav
