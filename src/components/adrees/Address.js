import Geo from "../geo/Geo";

export default function Address({street, suite, city, zipcode, geo}) {
    return (
        <div>
            <h3>{street}</h3>
            <h3>{suite}</h3>
            <h3>{city}</h3>
            <h3>{zipcode}</h3>
            <Geo {...geo}/>
        </div>
    );
}