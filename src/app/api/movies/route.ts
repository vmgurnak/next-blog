import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = process.env.API_KEY;

  const config = {
    params: {
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const movies = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day`,
    config
  ).then((res) => res.json());

  return NextResponse.json(movies);
}
