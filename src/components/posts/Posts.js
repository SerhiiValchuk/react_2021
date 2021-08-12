import Post from '../post/Post';
import {useEffect, useState} from "react";
import {getPosts,getPost} from '../../services/post.service';

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