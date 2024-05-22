import { useState } from 'react';
import './FooterBanner.css';

const FooterBanner = () => {
    const [email, setEmail] = useState<string>("");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            handleSubscribeButton();
        }
    };

    const handleSubscribeButton = () => {
        setEmail("");
    };

    return (
        <div className='footer-banner'>
            <div className="right-element">
                <h3>GET UPDATE FIRST</h3>
                <h1>Get the news in front line by <span id='red-text'>subscribe</span> our latest updates</h1>
            </div>

            <div className="left-element">
                <input type="email" name="" id="subscribe-input"
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyDown} />
                <button onClick={handleSubscribeButton}>Subscribe</button>
            </div>
        </div>
    )
}

export default FooterBanner
