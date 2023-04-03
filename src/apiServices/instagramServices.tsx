import axios from "axios";

export const getInstagramFeed = async () => {
  const response = await axios.get(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${
      import.meta.env.VITE_IG_API_TOKEN
    }&limit=6`
  );
  return response.data.data;
};
