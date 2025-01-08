import { NextResponse } from 'next/server';
import { posts } from './posts';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get('query');

  // let currentPosts = posts;

  // if (query) {
  //   currentPosts = posts.filter((post) =>
  //     post.title.toLocaleLowerCase().includes(query.toLowerCase())
  //   );
  // }

  const currentPosts = query
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    : posts;

  return NextResponse.json(currentPosts);
}

export async function POST(req: Request) {
  const { title, body } = await req.json();
  const newPost = { id: posts.length + 1, title, body };
  posts.push(newPost);
  return NextResponse.json(newPost);
}

// export async function POST(req: Request) {
//   const body = await req.json();

//   console.log(body);

//   return NextResponse.json({ body });
// }
