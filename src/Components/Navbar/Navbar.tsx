import './Navbar.css'
import { image } from '../../config/constant/image'

const Navbar = () => {
    return (
        <>
            <div className="full-navbar">
                <nav>
                    <div className="nav-brand">
                        Bulletin
                    </div>

                    <span id='vertical-line'>|</span>
                    <div className="nav-items">
                        <ul>
                            <li>Stories</li>
                            <li>Creator</li>
                            <li>Community</li>
                            <li>Subscribe</li>

                        </ul>
                    </div>
                </nav>
                <div className="user-selection">
                    <span id="language-call">
                        <img src={image?.np} alt="" />
                    </span>

                    <span id='theme-toggle'>

                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar