import { FETCH_POSTS, NEW_POST } from './types';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => (dispatch) => {
  fetch(POST_URL)
    .then(response => response.json())
    .then((posts) => dispatch({
      type: FETCH_POSTS,
      payload: posts
    })
    )
};

export const createPost = (postData) => (dispatch) => {
  fetch(POST_URL, {
    method: 'POST',
    headers: {
      'content-type': 'appplication/json'
    },
    body: JSON.stringify(postData)
  })
    .then((response) => response.json())
    .then((result) => dispatch({
      type: NEW_POST,
      payload: postData
    }));
};

