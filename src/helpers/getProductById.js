export const getProductById = async (id) => {
  const url = `https://www.amiiboapi.com/api/amiibo/?id=${id}`;

  try {
    const response = await fetch(url);
    const { amiibo } = await response.json();
    const {
      head,
      tail,
      name,
      type,
      image,
      amiiboSeries,
      character,
      gameSeries,
    } = amiibo;
    return {
      id: head + tail,
      name,
      type,
      image,
      amiiboSeries,
      character,
      gameSeries,
      price: (Math.random() * 100).toFixed(2),
    };
  } catch (error) {
    console.error(error);
  }
};
