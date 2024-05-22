import './MainNews.css'
import { useContext } from 'react'
import { NewsContext } from '../../context/NewsContext'

const MainNews = () => {
    const { newsData, } = useContext(NewsContext);

    return (
        <div className='main-news'>
            <a href={newsData[1]?.url} target="_blank" rel="noopener noreferrer">
                <div className="main-news-img">
                    <img src={newsData[1]?.urlToImage} alt="" />
                </div>
                <div className="main-news-content">
                    <div className="main-article-info">
                        {/* <img src={image.fallback} alt="" /> */}
                        <span id='main-article-writer'>{newsData[1]?.author || "Unknown"}</span>
                        <span className='margin-left-25px'>&bull; {newsData[1]?.publishedAt.split('T')[0]}</span>
                    </div>
                    <div className="main-article-heading">
                        <h1>{newsData[1]?.title}</h1>
                    </div>

                    <div className="main-article-content">
                        <p>{newsData[1]?.description}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default MainNews