import './Navbar.css'
import { image } from '../../config/constant/image'
import ThemeToggleButton from '../common/atom/ThemeToggleButton/ThemeToggleButton'
import SearchBar from '../common/atom/SearchBar/SearchBar'


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

                <div className="search-bar-container">
                    <SearchBar />
                </div>

                <div className="user-selection">
                    {/* <span id="language-call">
                        <img src={image?.np} alt="" />
                    </span> */}
                    <ThemeToggleButton />
                </div>
            </div>
        </>
    )
}

export default Navbar