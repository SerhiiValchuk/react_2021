import axios from 'axios';

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users' ,

};
let axiosInstance = axios.create(config);
const getAxiosUsers = () => {
    return axiosInstance.get('');
};
const getPostsOfUser = (id) => {
    return axiosInstance('/'+id +'/posts')
};
const getCommentsOfPosts = (id) => {
    return axiosInstance('/'+id +'/comments')
};

export {getAxiosUsers, getPostsOfUser, getCommentsOfPosts};
