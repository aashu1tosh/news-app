import './MainNews.css'
import { image } from '../../config/constant/image'
import { useContext } from 'react'
import { NewsContext } from '../../context/NewsContext'

const MainNews = () => {
    const { newsData, } = useContext(NewsContext);

    return (
        <div className='main-news'>
            <div className="main-news-img">
                <img src={newsData[1]?.urlToImage} alt="" />
            </div>
            <div className="main-news-content">
                <div className="main-article-info">
                    <img src={image.fallback} alt="" />
                    <span id='main-article-writer'>{newsData[1]?.author || "Unknown"}</span>
                    <span className='margin-left-25px'>&bull; {newsData[1]?.publishedAt}</span>
                </div>
                <div className="main-article-heading">
                    <h1>{newsData[1]?.title}</h1>
                </div>

                <div className="main-article-content">
                    <p>{newsData[1]?.description}</p>
                </div>

                <div className="main-article-type">
                    <p><span id='red-text'>{newsData[1]?.category}</span> <span className='margin-left-25px'> &bull; 4 mins read</span></p>
                </div>
            </div>
        </div>
    )
}

export default MainNews