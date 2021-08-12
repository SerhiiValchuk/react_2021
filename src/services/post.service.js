const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
};
const getPost = async (id) => {
    let post = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(value => value.json());
    return post;
};

export {getPosts, getPost};
