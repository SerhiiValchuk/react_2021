
import Post from "../Post/Post";

export default function Posts({items}) {

  return (
    <div>
      {
        items.map(value =><Post key={value.id} item={value}/>)
      }
    </div>

  );
}