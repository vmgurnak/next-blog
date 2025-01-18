// use component
'use client';

// import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../services/getPosts';
import Posts from '@/component/Posts';
import PostSearch from '@/component/PostSearch';

// export const metadata: Metadata = {
//   title: 'Next Blog - Blog Page',
//   description: 'Blog page',
// };

const BlogPage = () => {
  const [posts, setPosts] = useState<object[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .catch(console.error)
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

// Server Component
// Server Site Rendering

// import { Metadata } from 'next';
// import { getAllPosts } from '../services/getPosts';
// import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'Next Blog - Blog Page',
//   description: 'Blog page',
// };

// export default async function Blog() {
//   const posts = await getAllPosts();

//   return (
//     <>
//       <h1>Blog page</h1>
//       <ul>
//         {posts.map((post: { id: string; title: string }) => (
//           <li key={post.id}>
//             <Link href={`/blog/${post.id}`}>{post.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
