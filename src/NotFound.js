import {Link} from 'react-router-dom'

function NotFound() {
  return (
      <section className='blog-preview notfound' >
        <h2>Sorry</h2>
        <p>This page could not be found</p>
        <Link to = '/'>Return to the HomePage...</Link>
    </section>
  )
}

export default NotFound