const url = import.meta.env.VITE_SERVER_URL;

export const getSingle = async (id) => {
  const photo = await fetch(`${url}getUnsplashImage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      id: id,
    }),
  });

  const data = await photo.json();
  const image = data.image;
  return image;
};
