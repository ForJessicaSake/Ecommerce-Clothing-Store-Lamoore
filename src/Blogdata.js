
import { Link } from 'react-router-dom'

function Blogdata({blogs, handleDelete}) {
  return (
      <section className="components">
          <div className="blogs">
              {blogs.map((blog) => (
                  <section className="blog-preview" key={blog.id}>
                      <Link to={`/blogs/${blog.id}`} className='link'>
                      <h2 className='blog-title'>{blog.title}</h2>
                      <p className='blog-body'>{blog.body}</p>
                      <h4 className='blog-author'>written by {blog.author}</h4>
                      </Link>
                  </section>
              ))}
          </div>
      </section> 
       )
}

export default Blogdata;