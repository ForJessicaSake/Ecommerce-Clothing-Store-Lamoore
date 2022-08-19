import group from '../Images/lorde.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


function Hero() {
    useEffect(() => {
            AOS.init();

        })

    return (
        <header className='hero'>
            <section className='hero-text'>
                <h1 className='heading' data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="linear"
                >Your clothing lifestyle starts here.</h1>
                <p data-aos="fade-right" data-aos-duration="1400" data-aos-delay="90" data-aos-easing="linear"
                >Reveal yourself, Reveal the world for yourself.</p>
                <button className='btn' data-aos="fade-right" data-aos-duration="1800" data-aos-delay="120" data-aos-easing="linear"
                >Catalog</button>
            </section>
            <section className='image-section' data-aos="fade-left" data-aos-duration="800" data-aos-delay="50" data-aos-easing="linear" >
                <img src={group} alt='group of ladies' className='group-image'/>
            </section>
        </header>
    )
}
export default Hero