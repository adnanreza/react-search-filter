import React from 'react'

const Blog = ({ blog }) => {
    const { title, description } = blog;

    return (
        <div className='blog'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Blog
