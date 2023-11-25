import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className='ftp'>
                    <h1>Traveller</h1>
                    <p >Choose your favorite destination...</p>
                </div>

            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <p>Changelog</p>
                    <p>Status</p>
                    <p>License</p>
                    <p>All version</p>
                </div>


                <div>
                    <h4>Community</h4>
                    <p>Gothub</p>
                    <p>Issue</p>
                    <p>Project</p>
                    <p>Twitter</p>

                </div>
                <div>
                    <h4>Help</h4>
                    <p>support</p>
                    <p>Troubleshoting</p>
                    <p>Cpntact us</p>
                </div>
                <div>
                    <h4>Others</h4>
                    <p>Terms of service</p>
                    <p>Privacy policy</p>
                    <p>License</p>
                </div>
            </div>

            <div className="socialIcons">
                <div className='hover'><FaFacebook className='icons' /></div>
                <div className='hover'>   <FaGithub className='icons' /></div>
                <div className='hover'><FaInstagram className='icons' /></div>
                <div className='hover'>   <FaTwitter className='icons' /></div>
                <div className='hover'>   <FaLinkedin className='icons' /></div>
            </div>

        </div>
    )
}

export default Footer