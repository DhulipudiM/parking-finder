import React from 'react';
import { MenuItems } from './menu-items';
import {ReactComponent as SvgFooter} from "../../assets/footer.svg";
import "./navbar.styles.css";

export const Navbar = () => {
  return(
    <nav className="NavBarItems">
      <a>
        <SvgFooter style={{maxWidth: "5%", fill: "#1fa637", position: "absolute",left:"3%", top: "13%"}}/>
      </a>
      <h1 className="navbar-logo"></h1>
      <div className="menu-icon"></div>
      <ul>
        {
          MenuItems.map(item, index => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                {item.title}
                </a>
              </li>
              )
            }
          )
        }
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  )
}

