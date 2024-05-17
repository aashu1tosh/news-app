import './MainNews.css'
import {image} from '../../config/constant/image'

const MainNews = () => {
  return (
    <div className='main-news'>
        <div className="main-news-img">
            <img src={image?.fallback} alt="" />
        </div>
        <div className="main-news-content">
            <div className="main-article-info">
                <img src={image.fallback} alt="" />
                <span id='main-article-writer'>Netflix</span>
                <span className='margin-left-25px'>&bull; 12 miniutes ago</span>
            </div>
            <div className="main-article-heading">
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>

            <div className="main-article-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at neque nulla repellat ipsum accusantium! Ducimus labore dolorem, voluptatibus molestiae vel ad sed nihil nesciunt?</p>
            </div>

            <div className="main-article-type">
                <p><span id='red-text'>Movies</span> <span className='margin-left-25px'> &bull; 4 mins read</span></p>
            </div>
        </div>
    </div>
  )
}

export default MainNews