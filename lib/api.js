const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export const getCuratedPhotos = async () => {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbzA_PKBAE4kRP2z9pFoI5mQcCowKIW7K7LV5xIV2Po4/dev`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  const responseJson = await res.json();
  return responseJson.photos;
};