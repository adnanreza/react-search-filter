import React, { useContext, useState } from 'react'
import { FormControl, Input } from '@material-ui/core'
import BlogContext from '../context/blogContext';

const BlogFilter = () => {
    const blogContext = useContext(BlogContext);
    const { filterBlogs, clearFilter } = blogContext;

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        if(searchValue !== '') {
            filterBlogs(searchValue);
        } else {
            clearFilter();
        }
    }

    return (
        <FormControl>
            <Input
                value={searchValue}
                type='text'
                placeholder='Filter Blogs'
                onChange={handleChange}
            />
        </FormControl>
    )
}

export default BlogFilter
