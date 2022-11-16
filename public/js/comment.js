const postId = document.querySelector('input[name="post id"]').value;

const commentFormHandler = async (event) => {
  event.preventDefault();

  const commentContent = document.querySelector('comment_text[name="comment"]').value;
}

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
