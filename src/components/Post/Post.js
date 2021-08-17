import Comments from "../comments/Comments";
import {useEffect, useState} from "react";
import {getCommentsOfPosts} from "../../services/user.axios.sevice";

export default function Post({item}) {
  let [comments, setComments] = useState([])

  useEffect(()=>{
    getCommentsOfPosts(item.id).then(({data}) =>setComments([...data]));
  },[item.id])
  return (
    <div>
      {item.title}
      <h4><Comments itemi={comments}/></h4>
    </div>
  );
}