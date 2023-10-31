export const getGifs = async ({ category }) => {
  const url = `https:api.giphy.com/v1/gifs/search?api_key=ID1ZNygv9ckTAe1RWE1IBTN0A5K3Nhwt&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.url,
    image: img.images.downsized_medium.url,
  }));
  // console.log(gifs);
  console.log(resp);
  console.log({ data });
  return gifs;
};
