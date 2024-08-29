export const getPhotos = async (qty, page, id) => {
  const res = await fetch(
    `https://api.unsplash.com/collections/${id}/photos?page=${page}&per_page=${qty}&client_id=0XABtLnsqF9k6amRwp0xYCgCnT7NxjeDr5hK9J_icNE`
  );

  const data = await res.json();
  return data;
};

export const getSingle = async (id) => {
  const res = await fetch(
    `https://api.unsplash.com/photos/${id}?&client_id=0XABtLnsqF9k6amRwp0xYCgCnT7NxjeDr5hK9J_icNE`
  );

  const data = await res.json();
  return data;
};
