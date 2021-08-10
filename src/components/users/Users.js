import Address from "../adrees/Address";


export default function Users({id, name, username,email,phone, website }) {
    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{username}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <h2>{website}</h2>
        </div>
    );
}
