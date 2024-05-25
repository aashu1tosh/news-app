import { useContext } from 'react';
import { image } from '../../config/constant/image';
import { NewsContext, NewsInterface } from '../../context/NewsContext';
import './LatestNews.css';

const LatestNews = () => {
    const { newsData } = useContext(NewsContext);

    return (
        <div className='latest-news'>
            <h1>Latest News</h1>

            <div className="latest-news-contents">
                {
                    newsData.map((_: NewsInterface, index: number) => (

                        <a href={newsData[index].url} target='_blank' key={index}>
                            <div className="latest-news-content" key={index}>
                                <img src={newsData[index]?.urlToImage || image.fallback} alt="" />

                                <div className="text-content">
                                    <p id='red-text'>{newsData[index]?.author || "Unknown"}</p>
                                    <h3 id='news-title'>{newsData[index]?.title}</h3>

                                    <p>{newsData[index]?.description
                                        ? newsData[index].description.substring(0, 100) + '...'
                                        : 'No description available'}</p>
                                    <span id='red-text' className='bottom-right'> {newsData[index]?.publishedAt.split('T')[0]}</span>
                                </div>

                            </div>
                        </a>

                    ))
                }
            </div>
        </div>
    )
}

export default LatestNews