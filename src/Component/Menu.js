import { useState } from "react";
import "./Menu.css";
export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  let Menu
  if (showMenu) {
    
    Menu = (
      <div>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#book">Book</a>
          </li>
        </ul>
      </div>
    );
  }

  return (
   
    <div className="menu">
      <span onClick={() => setShowMenu(!showMenu)}>
        {Menu} 
        <div className="bar" />
        <div className="bar_" />
        <div className="bar__" />
      </span>
    </div>
   
  );
}
