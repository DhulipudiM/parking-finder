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
        <SvgFooter className="svgFooter"/>
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
        <a  className="ffb" href="https://www.facebook.com/JustParkHQ/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x"></i>
        </a>
    </li>
    <li className="tw">
        <a  className="fli" href="https://www.twitter.com/JustPark/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i>
        </a>
    </li>
    </ul>
       </div>
            </div>
            <hr/>
        </>
    )
}