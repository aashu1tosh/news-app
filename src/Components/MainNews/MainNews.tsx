import './MainNews.css'
import { image } from '../../config/constant/image'
import { useContext } from 'react'
import { NewsContext } from '../../context/NewsContext'

const MainNews = () => {
    const { newsData, } = useContext(NewsContext);

    return (
        <div className='main-news'>
            <div className="main-news-img">
                <img src={newsData[0]?.image_url} alt="" />
            </div>
            <div className="main-news-content">
                <div className="main-article-info">
                    <img src={image.fallback} alt="" />
                    <span id='main-article-writer'>{newsData[0]?.creator || "Unknown"}</span>
                    <span className='margin-left-25px'>&bull; {newsData[0]?.pubDate}</span>
                </div>
                <div className="main-article-heading">
                    <h1>{newsData[0]?.title}</h1>
                </div>

                <div className="main-article-content">
                    <p>{newsData[0]?.description}</p>
                </div>

                <div className="main-article-type">
                    <p><span id='red-text'>{newsData[0]?.category}</span> <span className='margin-left-25px'> &bull; 4 mins read</span></p>
                </div>
            </div>
        </div>
    )
}

export default MainNews