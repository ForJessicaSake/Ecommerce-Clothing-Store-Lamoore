import {useEffect} from 'react'
import teens from '../Images/collage.jpg'
import ladies from '../Images/ladies.jpg'
import men from '../Images/men.png'
import { BsArrowRight } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Catalog() {

    useEffect(() => {
        AOS.init();

    })
    return (
        <main>
            <section className="catalog-wrapper">
                <h1 className="catalog-heading">Catalog</h1>
                <p>Here you will find what you need</p>
                <section className='catalog'>

                    <div>
                        <img src={men} alt='men' className='product-image' data-aos="fade-right" data-aos-duration="800" data-aos-delay="50" data-aos-easing="linear" />
                        <div className='ct'>
                            <h3>For Men</h3>
                            <BsArrowRight className='arr' />
                        </div>

                    </div>
                    <div>
                        <img src={ladies} alt='woman' className='product-image' data-aos="fade-up" data-aos-duration="800" data-aos-delay="50" data-aos-easing="linear" />

                        <div className='ct'>
                            <h3>For Ladies</h3>
                            <BsArrowRight className='arr' /></div>
                    </div>
                    <div>
                        <img src={teens} alt='teens' className='product-image' data-aos="fade-left" data-aos-duration="800" data-aos-delay="50" data-aos-easing="linear" />
                        <div className='ct'><h3>Unisex</h3>
                            <BsArrowRight className='arr' />
                        </div>

                    </div>
                </section>
            </section>
        </main>
    )
}

export default Catalog