import { useContext } from 'react'
import { stateContext } from '../App'

function Navbar() {
    const { count, increment, decrement, search, setSearch } = useContext(stateContext)

    return (
        <nav>
            <h1>LA MORE</h1>
            <input
                type='text'
                value={search}
                placeholder='search for items,brands and inspiration'
                onChange={(e) => { setSearch(e.target.value) }}
            />
            <p>Cart Icon</p>
            <p>{count}</p>
            <p>Avartar-image</p>
            <p>Welcome back</p>
        </nav>
    )
}

export default Navbar