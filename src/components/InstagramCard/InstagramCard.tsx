import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InstagramCardStyle } from './InstagramCardStyle';
import Button from '../../elements/button/Button';


type Props = {}

export type InstagramPost = {
  map(arg0: (post: any) => JSX.Element): React.ReactNode;
}

const InstagramCard = (props: Props) => {
  const [feed, setFeed] = useState<InstagramPost>([]);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${import.meta.env.VITE_IG_API_TOKEN}&limit=3`);
        console.log(response.data.data)
        setFeed(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInstagramFeed();
  }, []);

  return (
    <>
        {feed.map((post) => (
          
    <InstagramCardStyle>
          <li key={post.id}>
            <img src={post.media_url} alt={post.caption} />
            <p>{post.caption}</p>
            <Button label={'Ver más'} />
          </li>
    </InstagramCardStyle>
        ))}
        </>
  );
};
export default InstagramCard