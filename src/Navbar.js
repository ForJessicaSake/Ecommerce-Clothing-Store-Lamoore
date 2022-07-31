// import Button from './Button';
import {Link} from "react-router-dom"

function Navbar() { 
    
    return(
    <nav className = "navbar" >
        <h2 className='logo'>Blog</h2> 
        <div className="nav-links">
            <Link to= '/'> Home </Link>
            <Link to= '/create'> Create </Link>
            {/* <Button text='Sign Up' backgroundColor= '#f1356d'/> */}
        </div>
    </nav>
    )
}
export default Navbar;