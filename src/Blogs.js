import Blogdata from './Blogdata';
import useFetch from './useFetch';
function Blogs() {
  
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <section>
            {isPending  &&  <div className='pending'>Loading...</div> }
            {error && <p className='error'>{error}</p>}
            {blogs && <Blogdata blogs={blogs}/>}
        </section>

    )
}

export default Blogs;
