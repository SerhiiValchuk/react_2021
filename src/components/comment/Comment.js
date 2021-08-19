export default function Comment({item:commentItem}) {
  return (
    <div>
      {commentItem.id} {commentItem.name}
      <button onClick={() => {
      }}>details
      </button>
    </div>
  );
}