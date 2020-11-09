import React from 'react';
import './Footer.css';
import {ReactComponent as SvgFooter} from "../assets/footer.svg";

export const Footer = () => {
    return(
        <>
        <div id="footer">
        <hr/>
            <div id="f1">
                <a>
                <SvgFooter style={{maxWidth: "5%", fill: "#1fa637", position: "absolute",left:"3%", top: "13%"}}/>
                </a>
                </div>
       <div id="f2">
           <ul>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">About</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">How it works</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Help</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Get free parking</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Student discount</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Jobs</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Blog</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Media</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Contact Us</a>
               </li>
           </ul>
           
       </div>
       <div id="f3">
       <ul>
            <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Cashless parking solution</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Car park management</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Hotel car parks</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Rent out your driveway</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Airport parking</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Stadium parking</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Station parking</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">City parking</a>
               </li>
               <li>
               <a href="/about/how-it-works/" to="about/how-it-works/">Corporate accounts</a>
               </li>
           </ul>
       </div>
       <div id="f4">
<ul>
<li id="fl">
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