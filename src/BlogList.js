import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch'

const BlogList = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)


    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE"
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <section className="blogs">

            {isPending && <div className='pending'> Loading...</div>}
            {error && <p className='error'>{error}</p>}
            {blog && (

                <section className="blog-preview" key={blog.id}>
                    <h2 className='blog-title'>{blog.title}</h2>
                    <p className='blog-body'>{blog.body}</p>
                    <h4 className='blog-author'>{blog.author}</h4>
                    <button className="delete-btn" onClick={handleDelete}>Delete Blog</button>
                </section>)

            }

        </section>
    )
}

export default BlogList