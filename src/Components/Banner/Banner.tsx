import './Banner.css'

import { image } from '../../config/constant/image'

const Banner = () => {
    return (
        <div className="banner">
            <h1>WELCOME TO BULLETIN</h1>

            <p>Craft narratives <span className='banner-image'><img src={image?.writing} alt="" />
            </span>, that inspire <span id='red-text'>inspiration</span>
                <span className='banner-image'><img src={image?.inspiration} alt="" /></span>  <br />
                <span id='red-text'>knowledge</span> <span className='banner-image'><img src={image?.book} alt="" /></span> ,and
                <span id='red-text'> entertainment </span><span className='banner-image'><img src={image?.clapboard} alt="" /></span>
            </p>
        </div>
    )
}

export default Banner