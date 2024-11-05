const posts = [
    {id: 1, title: "Post One"},
    {id: 2, title: "Post Two"},
    {id: 3, title: "Post Three"},
    {id: 4, title: "Post Four"},
    {id: 5, title: "Post Five"},
];

const getPosts = () => posts;

export const postsCount = () => posts.length;
export const postLabel = postsCount() > 1 ? 'posts' : 'post';

export default getPosts;