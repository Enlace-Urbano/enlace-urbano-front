import React, { useState, useEffect } from "react";
import { InstagramCardStyle } from "./InstagramCardStyle";
import Button from "../../elements/button/Button";
import { getInstagramFeed } from "../../apiServices/instagramServices";

type Props = {};

export type InstagramPost = {
  map(arg0: (post: any) => JSX.Element): React.ReactNode;
};

const InstagramCard = (props: Props) => {
  const [feed, setFeed] = useState<InstagramPost>([]);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const instagramFeed = await getInstagramFeed();
        console.log(instagramFeed);
        setFeed(instagramFeed);
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
            <Button label={"Ver más"} />
          </li>
        </InstagramCardStyle>
      ))}
    </>
  );
};
export default InstagramCard;
