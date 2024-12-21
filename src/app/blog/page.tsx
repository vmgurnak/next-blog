'use client';

// import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../services/getPosts';
import Posts from '@/component/Posts';
import PostSearch from '@/component/PostSearch';

// export const metadata: Metadata = {
//   title: 'Next Blog - Blog Page',
// };

const BlogPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Page Blog</h1>
      <PostSearch onSearch={setPosts} />
      {isLoading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
};

export default BlogPage;
