
import Post from '../post/Post';
import {useEffect, useState} from "react";
import {getPosts,} from '../../service/posts.service';

export default function Posts() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(value => setPosts([...value]));
  }, []);
  return (
      <div>
        {
          posts.map((postItem) => <Post key={postItem.id} item={postItem}/>)
        }
      </div>
  );
}