import Address from "../adrees/Address";
import Company from "../company/Company";


export default function Users({id, name, username,email,phone, website, address, company }) {
    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{username}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <h2>{website}</h2>
            <Address {...address}/>
            <Company {...company}/>
        </div>
    );
}
