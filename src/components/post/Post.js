export default function Post({item:postItem}) {
  return (
    <div>
      {postItem.id} {postItem.title}
      <button onClick={() => {
      }}>details
      </button>
    </div>
  );
}