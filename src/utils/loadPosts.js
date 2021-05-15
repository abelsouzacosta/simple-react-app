const zipper = (textJson, imagesJson) => {
  const posts = textJson.map((post, index) => {
    return { ...post, cover: imagesJson[index].url };
  });

  return posts;
};

export async function loadPosts() {
  const text = await fetch('https://jsonplaceholder.typicode.com/posts');
  const textJson = await text.json();

  const images = await fetch('https://jsonplaceholder.typicode.com/photos');
  const imagesJson = await images.json();

  const result = zipper(textJson, imagesJson);

  return result;
}
