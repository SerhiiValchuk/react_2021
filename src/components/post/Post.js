export default function Post(item) {
  return (
    <div>
        item.map(value =><Post key={value.id} item={value}/>)
    </div>
  );
}