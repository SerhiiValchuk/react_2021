import Comment from '../comment/Comment';
import {useEffect, useState} from "react";
import {getComments} from '../../service/comments.service';

export default function Comments() {
  let [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then(value => setComments([...value]));
  }, []);
  return (
      <div>
        {
          comments.map((commentItem) => <Comment key={commentItem.id} item={commentItem}/>)
        }
      </div>
  );
}