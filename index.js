import getPosts, { postsCount, postLabel }  from "./postController.js";

console.log('');
console.log(`We have ${postsCount()} ${postLabel} in total:`);
console.log('');
getPosts().forEach(post => {
    console.log(post.id + '. ' + post.title);
});
console.log('');