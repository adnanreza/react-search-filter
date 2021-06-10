import React, {useContext} from 'react'
import Blog from './Blog'
import BlogContext from '../context/blogContext'

const Blogs = () => {
    //Initialized context
    const blogContext = useContext(BlogContext);
    const { blogs, filtered } = blogContext;

    return (
        <div>
            {
                filtered !== null
                ? (
                    filtered.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
                ) :
                (
                    blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
                )
            }
        </div>
    )
}

export default Blogs
