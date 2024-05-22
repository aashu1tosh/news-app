import './Navbar.css'
import ThemeToggleButton from '../common/atom/ThemeToggleButton/ThemeToggleButton'
import SearchBar from '../common/atom/SearchBar/SearchBar'
import { useContext, useState } from 'react'
import { SearchBarContext } from '../../context/SearchBarContext'
import { RiMenu4Fill } from "react-icons/ri";


const Navbar = () => {
    const { setSearchBarData } = useContext(SearchBarContext);


    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
        console.log("toggleMenu pressed")
    }
    return (
        <>
            <div className="full-navbar">
                <nav>
                    <div className="nav-brand">
                        Bulletin
                    </div>

                    <span id='vertical-line'>|</span>
                    {/* <div className="nav-items"> */}
                    <div className={mobileMenu ? "nav-items" : "hide-mobile-bar nav-items "}>

                        <ul>
                            <li onClick={() => setSearchBarData("Sports")}>Sports</li>
                            <li onClick={() => setSearchBarData("Business")}>Business</li>
                            <li onClick={() => setSearchBarData("Entertainment")}>Entertainment</li>
                            <li onClick={() => setSearchBarData("Technology")}>Technology</li>
                        </ul>
                    </div>


                </nav>

                <div className="search-bar-container">
                    <SearchBar />
                </div>

                <div className="user-selection">

                    <span className='theme-toggle'>
                        <ThemeToggleButton />
                    </span>

                    <span id="toggle-button" onClick={toggleMenu}>
                        <RiMenu4Fill size={30} />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar