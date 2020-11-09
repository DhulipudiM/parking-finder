import React from 'react';
import './Footer.css';
import {ReactComponent as SvgFooter} from "../assets/footer.svg";
import {FooterItems, FooterItemLast} from './RenderFooter';

export const Footer = () => {
    return(
        <>
        <hr/>
        <div className="footer">
        <div className="f1">
        <a>
        <SvgFooter style={{maxWidth: "5%", fill: "#1fa637", position: "absolute", top: "13%"}}/>
      </a>
      </div>
       <div className="f2">
           <ul>
          { FooterItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.url} to={item.url} >{item.title}</a>
                    </li>
                )
           })}
           </ul>
           
       </div>
       <div className="f3">
       <ul>
       { FooterItemLast.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.url} to={item.url} >{item.title}</a>
                    </li>
                )
           })}
           </ul>
       </div>
       <div className="f4">
    <ul className="fk">
    <li className="fb">
        <a  className="ffb"><i class="fab fa-facebook"></i>
        </a>
    </li>
    <li className="tw">
        <a  className="fli"><i class="fab fa-twitter"></i>
        </a>
    </li>
    </ul>
       </div>
            </div>
            <hr/>
        </>
    )
}