import React from 'react'
import UseFetch from './UseFetch.js'

function News() {
    const { data: news, error, isPending } = UseFetch("https://ecommerce-database-app.herokuapp.com/")
    return (
        <main className='news' id = 'news'>
            <h1 className='heading'>News</h1>
            {isPending && <h1>....</h1>}
            {error && <p>{error}</p>}
            {news && news.map((news) => (
                <section className='news-dispaly' key={news.id}>
                    <div>
                        <h3>{news.title}</h3>
                        <p>{news.content}</p>
                        <h5>{news.readmore}</h5>
                    </div>
                </section>
            ))}
        </main>
    )
}

export default News