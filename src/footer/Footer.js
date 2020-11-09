import React from 'react';
import './Footer.css';
import {ReactComponent as SvgFooter} from "../assets/footer.svg";
import {FooterItems, FooterItemLast} from './RenderFooter';

export const Footer = () => {
    return(
        <>
        <hr/>
        <div id="footer">
       <div id="f2">
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
       <div id="f3">
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
       <div id="f4">
<ul>
<li id="fk">
<a><i class="fa fa-facebook-square" aria-hidden="true">Fb</i>
</a>
               </li>
               <li>
<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="icon-facebook">LinkedIn</a>
               </li>
           </ul>
       </div>
         
          
            </div>
            <hr/>
        </>
    )
}