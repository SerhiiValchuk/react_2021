const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

};
const getUser = async ([]) => {
    let user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(value => value.json());
    return user;
};
export {getUsers, getUser};