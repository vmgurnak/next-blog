// 'use client';

// import Link from 'next/link';

// type Props = {
//   posts: any[];
// };

// const Posts = ({ posts }: Props) => {
//   return (
//     <ul>
//       {posts.map((post: any) => (
//         <li key={post.id}>
//           <Link href={`/blog/${post.id}`}>{post.title}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Posts;

// with zustand

// 'use client';

// import { useEffect } from 'react';
// import Link from 'next/link';
// import { shallow } from 'zustand/shallow';
// import { usePosts } from '@/store';
// // import { getAllPosts } from '@/services/getPosts';

// const Posts = () => {

//   const [posts, loading, getAllPosts] = usePosts(
//     (state) => [state.posts, state.loading, state.getAllPosts],
//     shallow
//   );

//   useEffect(() => {
//     getAllPosts();
//   }, [getAllPosts]);

//   return loading ? (
//     <h3>Loading... </h3>
//   ) : (
//     <ul>
//       {posts.map((post: any) => (
//         <li key={post.id}>
//           <Link href={`/blog/${post.id}`}>{post.title}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Posts;

// with SWR

'use client';

import { getAllPosts } from '@/services/getPosts';
import Link from 'next/link';
import useSWR from 'swr';

const Posts = () => {
  const { data: posts, isLoading } = useSWR('posts', getAllPosts);

  return isLoading ? (
    <h3>Loading... </h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
