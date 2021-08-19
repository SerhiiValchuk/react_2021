import Post from "../post/Post";
import {getPosts} from "../../services/user.fetch.service";
import {useState} from "react";

export default function User({item: userItem}) {
    let [posts, setPosts] = useState([]);

    const getUserPost = () => {
        getPosts(userItem.id).then(data => setPosts([...data]));
    };

    return (
        <div>
            {userItem.id} {userItem.name}
            <button onClick={getUserPost}>posts</button>
            <div>
                {
                    posts.map((item) => <Post item={item}/>)
                }
            </div>
        </div>
    );
}