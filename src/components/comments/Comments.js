import {useEffect, useState} from "react";
import {getComments} from "../../service/comments.service";

export default function Comments() {
  let [comments, setComments] = useState([])


  useEffect(() => {
    getComments().then(value => setComments([...value]));
      }, []);

  return (
    <div>




    </div>
  );
}