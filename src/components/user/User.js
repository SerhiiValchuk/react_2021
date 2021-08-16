import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/user.axios.sevice";
import Posts from "../posts/Posts";

export default function User({item:userItem}) {
   let [posts, setPosts] = useState([]);
    useEffect(()=>{
       getPostsOfUser(userItem.id).then(({data}) => setPosts([...data]));

   },[userItem.id]);

    return (
        <div>
            <h2>
                {userItem.id} {userItem.name}
            </h2>
            <h3><Posts items ={posts}/></h3>
        </div>
    );
}