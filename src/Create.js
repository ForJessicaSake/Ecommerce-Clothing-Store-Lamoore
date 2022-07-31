import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Create() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Jessica')
    const [adding, setAdding] = useState(false)

    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const blog ={ title, body, author}
        setAdding(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setAdding(false)
            console.log('post request sent')
            navigate('/');
        })


    }

   

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <div className= 'form'>
                <h2 className='blog-title' style={{margin: 'auto', marginBottom: '5%'}}>
                    Add New Blog
                </h2>
                <label className='label'> Title:
                    <input
                        type='text'
                        required
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>
                <label className='label'> Body:
                    <textarea
                        required
                        value={body}
                        onChange={(e) => { setBody(e.target.value) }}
                    />
                </label>
                <select className='label'
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}>

                    <option value='Jessica'>
                        Jessica
                    </option>
                    <option value='James'>
                        James
                    </option>
                    <option value='Steph'>
                        Steph
                    </option>
                </select>

                {!adding && <button className='submitbutton'>Add Blog</button>}
                {adding && <button className='submitbutton'>Adding</button>}

            </div>
           

        </form>
    )

}

export default Create;