import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

  const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    console.log("button clicked");
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (


    <div className="navbar_items">
      <h1 className="navbar_logo">Traveller</h1>

      <div className='menuItems' onClick={handleMenu}>
        {!menu ? (<AiOutlineMenu size={30} color="black" />) : (<AiOutlineClose size={30} color="black" />)}
      </div>

      <ul className={!menu ? "nav_menu" : "nav_menu active"}  >
        <li onClick={handleMenu}> <Link to="/" className='Link'>Home</Link></li>
        <li onClick={handleMenu}> <Link to="/about" className='Link'>About</Link></li>
        <li onClick={handleMenu}> <Link to="/service" className='Link'>Service</Link></li>
        <li onClick={handleMenu}> <Link to="/contact" className='Link'>Contact</Link></li>
      </ul>

    </div>

  )
}

export default Navbar
