import React from 'react';
import { MenuItems } from './menu-items';
import {ReactComponent as SvgFooter} from "../../assets/footer.svg";
import "./navbar.styles.css";

export const Navbar = () => {
  return(
    <nav className="NavBarItems">
      <a>
        <SvgFooter className="NavBar-logo"/>
      </a>
      <div className="menu-icon"></div>
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
  )
}

