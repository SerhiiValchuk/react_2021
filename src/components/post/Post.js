export default function Post({item:postItem}) {
  return (
    <div>
      {postItem.id} {postItem.title}
    </div>
  );
}