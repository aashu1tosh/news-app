import { useContext } from 'react';
import { image } from '../../config/constant/image';
import { NewsContext } from '../../context/NewsContext';
import './MainNews.css';

const MainNews = () => {
    const { newsData, } = useContext(NewsContext);

    return (
        <div className='main-news'>
            <a href={newsData[1]?.link} target="_blank" rel="noopener noreferrer">
                <div className="main-news-img">
                    <img src={newsData[1]?.image_url || image?.fallback} alt="" />
                </div>
                <div className="main-news-content">
                    <div className="main-article-info">
                        {/* <img src={image.fallback} alt="" /> */}
                        <span id='main-article-writer'>{newsData[1]?.creator || "Unknown"}</span>
                        <span className='margin-left-25px'>&bull; {newsData[1]?.pubDate.split(' ')[0]}</span>
                    </div>
                    <div className="main-article-heading">
                        <h1>{newsData[1]?.title}</h1>
                    </div>

                    <div className="main-article-content">
                        <p>
                            {newsData[1]?.description
                                ? newsData[1].description.substring(0, 100) + '...'
                                : 'No description available'}
                        </p>

                    </div>
                </div>
            </a>
        </div>
    )
}

export default MainNews