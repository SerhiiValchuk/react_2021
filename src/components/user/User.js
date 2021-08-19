import Post from "../post/Post";
import {getPosts} from "../../services/user.fetch.service";
import {useEffect, useState} from "react";
export default function User({item: userItem}) {
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts().then(({data}) => setPosts([...data]));

    },[]);

    return (
        <div>
            {userItem.id} {userItem.name}
            <button onClick={() => {
            }}>posts
            </button>
            <div>{
                posts.map((item) =>
                <Post item = {item}/>)
            }
            </div>
        </div>
    );
}