import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


import './Footer.css'
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-brand">
          <h3 id="red-text">Bulletin</h3>
          <p>Craft Narative that ignite inspiration, knowledge and entertainment</p>
        </div>

        <div className="footer-middle">
          <p>Copyrights &copy; Bulletin 2024</p>
        </div>

        <div className="footer-social">
            <span><FaFacebook size={25}/></span>
            <span><FaInstagramSquare size={25}/></span>
            <span><FaLinkedin size={25}/></span>
            <span><BsTwitterX size={25}/></span>
        </div>
    </div>
  )
}

export default Footer