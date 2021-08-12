const getComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());
};
const getComment = async (id) => {
    let comment = await fetch('https://jsonplaceholder.typicode.com/comments/' + id)
        .then(value => value.json());
    return comment;
};

export {getComments, getComment};