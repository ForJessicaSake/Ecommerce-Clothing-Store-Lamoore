import React from 'react'
import teens from '../Images/collage.jpg'
import ladies from '../Images/ladies.jpg'
import men from '../Images/men.png'
import { BsArrowRight } from 'react-icons/bs'


function Catalog() {
    return (
        <main>
            <section className="catalog-wrapper">
                <h1 className="catalog-heading">Catalog</h1>
                <p>Here you will find what you need</p>
                <section className='catalog'>

                    <div>
                        <img src={men} alt='men' className='product-image' />
                        <div className='ct'>
                            <h3>For Men</h3>
                            <BsArrowRight className='arr' />
                        </div>

                    </div>
                    <div>
                        <img src={ladies} alt='woman' className='product-image' />

                        <div className='ct'>
                            <h3>For Ladies</h3>
                            <BsArrowRight className='arr' /></div>
                    </div>
                    <div>
                        <img src={teens} alt='teens' className='product-image' />
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