export default function Post({item}) {
  return (
    <div>
        item.map(value => <div>{value.id} {value.title}</div>)
    </div>
  );
}