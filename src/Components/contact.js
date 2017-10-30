import React, { Component } from 'react';
import twitter from './twitter.png';
import github from './github.png';
import instagram from './instagram.png';
import facebook from './facebook.png';
import emailus from './emailus.png';
import linkedin from './linkedin.png';
import fiverr from './fiverr.png';
import callus from './callus.png';

export default  class Contact extends Component {
  render() {
    return (
        <div>
        <div id="box10"> 
        <div>
        <h1 id="box17">Let's Get In Touch!</h1>
        <hr id="box18"/>
        </div>
        <h6 id="box19">Ready to start your next project with us? That's great! Give us a call or send us an email and </h6>
        <h6 id="box20">we will get back to you as soon as possible!</h6>
        <a href="https://twitter.com/mnaeem05" target="_blank" ><img id="box21" src={twitter} alt="Twitter" title="Twitter"/></a>
        <a href="https://github.com/mnaeem05" target="_blank" ><img id="box22" src={github} alt="GitHub" title="GitHub"/></a>
        <a href="https://www.instagram.com/mnaeem05/" target="_blank" ><img id="box32" src={instagram} alt="instagram" title="Instagram"/></a>
        <a href="https://www.facebook.com/mnaeem0334" target="_blank" ><img id="box33" src={facebook} alt="facebook" title="Facebook"/></a>
        <a href="mailto:mnaeem0334@gmail.com" ><img id="box34" src={emailus} alt="emailus" title="Emailus"/></a>
        <a href="https://www.linkedin.com/in/muhammadnaeem1" target="_blank" ><img id="box35" src={linkedin} alt="linkedin" title="Linkedin"/></a>
        <a href="https://www.fiverr.com/mnaeem05" target="_blank" ><img id="box36" src={fiverr} alt="fiverr" title="Fiver"/></a>
        <img id="box38" src={callus} alt="callus" title="Callus"/>
        </div>
        <div>
        <p id="box37">+92 334 3604301</p>
    </div>

        </div>  
    )
  }
}
