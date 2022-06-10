export const getProducts = async () => {
  const url = `https://www.amiiboapi.com/api/amiibo/`;

  try {
    const response = await fetch(url);
    const { amiibo } = await response.json();
    return amiibo.map((product) => {
      const { head, tail, name, type, image } = product;
      return {
        id: head+tail,
        name,
        type,
        image,
        price: (Math.random() * 100).toFixed(2),
      };
    });
  } catch (error) {
    console.error(error);
  }
};
