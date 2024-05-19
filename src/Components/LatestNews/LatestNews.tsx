import './LatestNews.css'
import { image } from '../../config/constant/image'


const LatestNews = () => {
    const cars = ["Saab", "Volvo", "BMW", "Saab1", "Volvo2", "BMW1", "Saab0", "Volvo0", "BMW0", "mercedes"];
    return (
        <div className='latest-news'>
            <h1>Latest News</h1>

            <div className="latest-news-contents">
                {
                    cars.map((_, index) => (
                        <div className="latest-news-content" key={index}>
                            {/* <p>Latest News</p> */}
                            <img src={image?.fallback} alt="" />
                            <p>Formula 1 &bull; 3 hours ago</p>
                            <h3>We deserve alot more says Verstappen after, the win with RedBull.</h3>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error natus consequatur ex quidem enim tempora nobis, soluta repellendus laborum
                                asperiores molestias corporis earum voluptate.</p>

                                {/* <div className="main-article-type"> */}
                                <p><span id='red-text'>Movies</span> <span className='margin-left-25px'> &bull; 4 mins read</span></p>
                            {/* </div> */}
                            <hr />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LatestNews