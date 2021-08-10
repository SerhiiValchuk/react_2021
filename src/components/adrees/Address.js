export default function Address({street, suite, city, zipcode}) {
    return (
        <div>
            <h3>{street}</h3>
            <h3>{suite}</h3>
            <h3>{city}</h3>
            <h3>{zipcode}</h3>
        </div>
    );
}