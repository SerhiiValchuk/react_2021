export default function Comment({item:commentItem}) {
    return (
        <div>
            {commentItem.id} {commentItem.body}
        </div>
    );
}