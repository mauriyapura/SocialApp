
import { useEffect, useState } from "react";
import { Post } from "../post/Post"
import { Share } from "../share/Share"
import "./feed.css";
import axios from "axios";


export const Feed = ({username}) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async() => {
      const response = username 
        ? await axios.get("/post/profile/" + username) 
        : await axios.get("/post/profile/123123123") ;
        
      setPosts(response.data)    ;
    }
    fetchPosts();
  }, [username]);
  

  return (
    <div className="feed">
      <div className="feedWrapper">
        < Share/>
        {posts.map( p =>(
          < Post post={p} key={p._id} />
        ) )}

      </div>
    </div>
  )
}
