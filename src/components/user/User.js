export default function User({item:userItem}) {
    return (
        <div>
            {userItem.id} {userItem.name}
            <button onClick={()=>{
                console.log(userItem);
            }}>posts
            </button>
        </div>
    );
}