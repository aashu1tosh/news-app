import './LatestNews.css'
import { image } from '../../config/constant/image'
import { NewsContext } from '../../context/NewsContext';
import { useContext } from 'react';

const LatestNews = () => {
    const { newsData, setNewsData } = useContext(NewsContext);

    return (
        <div className='latest-news'>
            <h1>Latest News</h1>

            <div className="latest-news-contents">
                {
                    (newsData as Array).map((_, index) => (
                        
                        <a href={newsData[index].link} target='_blank' key={index}>
                            <div className="latest-news-content" key={index}>
                                <img src={newsData[index]?.image_url || image.fallback} alt="" />
                                <p>{newsData[index]?.creator || "Unknown"} &bull; {newsData[index]?.pubDate}</p>
                                <h3>{newsData[index]?.title}</h3>

                                <p>{newsData[index]?.description}</p>
                                <p><span id='red-text'>{newsData[index]?.category}</span> <span className='margin-left-25px'> &bull; {newsData[index]?.pubDate}</span></p>
                            </div>
                        </a>

                    ))
                }
            </div>
        </div>
    )
}


// cars.map((_, index) => (
//     <div className="latest-news-content" key={index}>
//         <img src={image?.fallback} alt="" />
//         <p>Formula 1 &bull; 3 hours ago</p>
//         <h3>We deserve alot more says Verstappen after, the win with RedBull.</h3>

//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error natus consequatur ex quidem enim tempora nobis, soluta repellendus laborum
//             asperiores molestias corporis earum voluptate.</p>
//             <p><span id='red-text'>Movies</span> <span className='margin-left-25px'> &bull; 4 mins read</span></p>
//         <hr />
//     </div>
// ))

export default LatestNews