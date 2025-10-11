import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () =>{

  const {addPostList} = useContext(PostListContext);

  const titleElement = useRef();
  const bodyTextElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();
  const userIdElement = useRef();

  const handleClickAddBtn = (event) =>{
    event.preventDefault();

    let userId = userIdElement.current.value;
    let title = titleElement.current.value;
    let bodyText = bodyTextElement.current.value;     
    let likes = likesElement.current.value;     
    let dislikes = dislikesElement.current.value;     
    let tags = tagsElement.current.value.split(" ");  

    userIdElement.current.value = '';
    titleElement.current.value = '';
    bodyTextElement.current.value = '';
    likesElement.current.value = '';
    dislikesElement.current.value = '';
    tagsElement.current.value = '';

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userId,
        title: title,
        body: bodyText,
        reactions: {
          likes: likes,
          dislikes: dislikes,
        },
        tags: tags,
        /* other post data */
      })
    })
    .then(res => res.json())
    .then(post => addPostList(post));
    
  };

  return(
    <>
      <form onSubmit={handleClickAddBtn} className="create-post">
        <div className="mb-3">
          <label htmlFor="exampleInputUserId" className="form-label">UserId</label>
          <input ref={userIdElement} type="text" className="form-control" id="exampleInputUserId" placeholder="User Id" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">Title</label>
          <input ref={titleElement} type="text" className="form-control" id="exampleInputTitle" placeholder="Enter Title" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputBodyText" className="form-label">Content</label>
          <textarea rows={5} ref={bodyTextElement} type="text" className="form-control" id="exampleInputBodyText" placeholder="Enter Body Text" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLikes" className="form-label">Likes</label>
          <input ref={likesElement} type="number" className="form-control" id="exampleInputLikes" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDislikes" className="form-label">Dislikes</label>
          <input ref={dislikesElement} type="number" className="form-control" id="exampleInputDislikes" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputTags" className="form-label">Tags</label>
          <input ref={tagsElement} type="text" className="form-control" id="exampleInputTags" placeholder="Enter tag using space" required/>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  )
};
export default CreatePost;