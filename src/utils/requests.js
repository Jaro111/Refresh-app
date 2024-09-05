const url = import.meta.env.VITE_SERVER_URL;

export const getGallery = async (limit, skip) => {
  const photos = await fetch(`${url}getImages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      limit: limit,
      skip: skip,
    }),
  });

  const response = await photos.json();
  const gallery = await response.myImages;
  return gallery;
};
