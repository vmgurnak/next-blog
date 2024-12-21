// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     next: { revalidate: 60 },
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

export const getAllPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 },
  });

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};
