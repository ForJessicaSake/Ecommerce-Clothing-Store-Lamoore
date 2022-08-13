import girl from '../Images/girl.png';
function Hero() {
    return (
        <header className='hero'>
            <section >
                <img src={girl} alt='fashion-image' />
            </section>
            <section className='hero-text'>
                <h2> 50% OFF YOUR NEXT PURCHASE AND A NEXT-DAY FREE DELIVERY!</h2>
                <h4>With code 3000</h4>
                <button>Shop now</button>
            </section>
        </header>
    )
}
export default Hero