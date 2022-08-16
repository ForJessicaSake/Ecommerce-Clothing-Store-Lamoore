import {useEffect} from 'react'
import couple from '../Images/couple.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Subscribe() {

        useEffect(() => {
            AOS.init();

        })

    return (
        <main className="subscribe-wrapper">
            <section className="subscribe-text" data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="linear">
                <h1>Subscribe</h1>
                <p>Do you want to get special offers and free giveaways?</p>
                <form className='int'>
                    <input className ='input'
                        type='text'
                        placeholder='Enter your email'
                    />
                    <button>Subscribe</button>
                </form>
                <input type='checkbox' data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="linear" /> <span> I agree to the privacy policy</span>
            </section>

            <section className="subscribe-image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="60" data-aos-easing="linear">
                <img src={couple} alt='couple' />
            </section>
        </main>)
}

export default Subscribe