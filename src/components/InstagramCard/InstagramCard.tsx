import React, { useState, useEffect } from "react";
import Button from "../../elements/button/Button";
import { getInstagramFeed } from "../../apiServices/instagramServices";
import { InstagramCardStyle } from "./InstagramCardStyle";

type Props = {}

export type InstagramPost = {
  map(arg0: (post: any) => JSX.Element): React.ReactNode
};

const InstagramCard = (props: Props) => {
  const [feed, setFeed] = useState<InstagramPost>([])

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const instagramFeed = await getInstagramFeed()
        console.log(instagramFeed)
        setFeed(instagramFeed)
      } catch (error) {
        console.log(error)
      }
    }

    fetchInstagramFeed()
  }, [])

  return (
    <>
      {feed.map((post) => (
        <InstagramCardStyle>
          <li key={post.id}>
            <img src={post.media_url} alt={post.caption} />
            <p>{post.caption}</p>
            <a href="https://www.instagram.com/enlace.urbano/?hl=es" target="_blank" rel="noopener noreferrer">
              <Button label="Ver más" />
            </a>
          </li>
        </InstagramCardStyle>
      ))}
    </>
  )
}

export default InstagramCard