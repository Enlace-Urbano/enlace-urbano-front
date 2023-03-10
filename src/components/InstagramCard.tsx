import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Props = {}

export type InstagramPost = {
  map(arg0: (post: any) => JSX.Element): React.ReactNode;
}

const InstagramFeed = (props: Props) => {
  const [feed, setFeed] = useState<InstagramPost>([]);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      const token = "IGQVJVT1lRYjFpQ2tVbkFBdmEtR24zeVA0a1B1ZA2JnN1BYeG4ybnF6M2RRMWF4MDF1d0U5RGhOMFBHNDRLdDVMTEhsdUNQc05Xd0h2NzVpbWV3ZAnl1Vi1HeDJkR0ZAJQlBwZADZA4MmJud2ZABR1FOcVIydQZDZD"
      try {
        const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${token}`);
        console.log(response.data.data)
        setFeed(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInstagramFeed();
  }, []);

  return (
    <div>
      <h2>Instagram Feed</h2>
      <ul>
        {feed.map((post) => (
          <li key={post.id}>
            <img style={{"width":"200px"}} src={post.media_url} alt={post.caption} />
            <p>{post.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InstagramFeed