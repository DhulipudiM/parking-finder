import React from 'react';
import { MenuItems } from './menu-items';
import {ReactComponent as SvgFooter} from "../../assets/footer.svg";
import {ReactComponent as MenuBurguer} from "../../assets/menu.svg";
import "./navbar.styles.css";

export const Navbar = () => {
  return(
    <header>
      <MenuBurguer className="MenuBurguer"/>
      <SvgFooter className="logo"/>
      <nav className="NavBarItems">
        <ul className="NavBar-menu">
          {
            MenuItems.map((item, index) => {
              return (
                <li key={index} className="NavBar-item">
                  <a className={item.cName} href={item.url}>
                  {item.title}
                  </a>
                </li>
                )
              }
            )
          }
          <li className="NavBar-login NavBar-item">Login</li>
          <li className="NavBar-signup NavBar-item">Sign Up</li>
        </ul>
      </nav>
    </header>
    
  )
}

