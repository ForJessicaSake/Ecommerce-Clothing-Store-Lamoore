import { useContext, useState } from 'react'
import { StateContext } from '../App'
import { Link } from 'react-router-dom'

import { BsCart3 } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'


function Navbar() {
    const { cart } = useContext(StateContext)
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <nav>
            <main className={toggle ? 'navigation expanded' : 'navigation'}>
                <section className='nav-logo'>
                    <h1>La<span style={{ color: '#969696' }}>Moore</span></h1>

                </section>

                <section className='links'>
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/women'><li>Women</li></Link>
                        <Link to='/men'> <li>Men</li></Link>
                        <Link to='/accessories'><li>Accessories</li></Link>
                        <Link to='/cart' className='cart'><li>Cart<BsCart3 className='cart-icon' style={{ color: '#f8f8f8' }} /><span style={{ color: 'yellow' }}>{cart.length}</span></li></Link>
                    </ul>
                </section>


                <section className="hamburger" onClick={handleToggle}>
                    {toggle ? <ImCancelCircle style={{ color: '#969696' }} /> : <AiOutlineMenu />}
                </section>
            </main>
        </nav>

    )

}

export default Navbar