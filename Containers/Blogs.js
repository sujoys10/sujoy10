import React from 'react';
import useSWR from 'swr';
import Loader from '../components/Loader';
import BlogCard from '../components/BlogCard';
import styles from '../styles/Blogs.module.css';


const fetcher = (url) => 
    fetch(url).then(res => res.json())

export default function Blogs(){
    const { data, error } = useSWR('/api/blogs/stage', fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <Loader />
    return (
        <div className={styles.blogs}>
            { data.blogs.length !== 0 &&
                data.blogs.map(blog => 
                    <BlogCard 
                        key={blog.id}
                        blog={blog}
                    />    
                )
            }
        </div>
    )
}



