import React from 'react';

const BlogList = () => {
  return (
    <div className='blog-list'>
      {Blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
