import Comments from "../comments/Comments";

export default function Posts({items}) {
  return (
    <div>
      {
        items.map(value =><div>{value.title}</div>)
      }
    </div>
  );
}