import Link from 'next/link';

type Posts = {
  posts: any[];
};

const Posts = ({ posts }: Posts) => {
  return (
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
