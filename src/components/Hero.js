import group from '../Images/lorde.jpg';
function Hero() {
    return (
        <header className='hero'>
            <section className='hero-text'>
                <h1 className='heading'>Your clothing lifestyle starts here.</h1>
                <p>Reveal yourself, Reveal the world for yourself.</p>
                <button className='btn'>Catalog</button>
            </section>
            <section className='image-section' >
                <img src={group} alt='group of ladies' className='group-image' />
            </section>
        </header>
    )
}
export default Hero