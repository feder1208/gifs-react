const apiKey = "5YPbnd7V7t23V7s7PkRV7lfvFcsBBd2j";

// export const getGifs = ({ keyword = "mordor" } = {}) => {
//   const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
//   return fetch(url)
//     .then((res) => res.json())
//     .then((response) => {
//       const { data = [] } = response;
//       if (Array.isArray(data)) {
//         const gifs = data.map((gif) => {
//           const { images, title, id } = gif;
//           const { url } = images.downsized_medium;
//           return { title, id, url };
//         });
//         return gifs;
//       }
//     });
// };
const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export default function getGifs({ limit = 25, keyword = "morty" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=G&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
