export default function Comments({itemi}) {
  return (
      <div>
          {
              itemi.map(value => <div>{value.id} {value.body}</div>)
          }
      </div>
  );
}