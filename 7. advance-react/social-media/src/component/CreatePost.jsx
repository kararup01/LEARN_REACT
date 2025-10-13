import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () =>{

  const {addPostList} = useContext(PostListContext);

  const titleElement = useRef();
  const bodyTextElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleClickAddBtn = (event) =>{
    event.preventDefault();

    let title = titleElement.current.value;
    let bodyText = bodyTextElement.current.value;     
    let reactions = reactionsElement.current.value;     
    let tags = tagsElement.current.value.split(" ");  
    let uniqId = 'id' + (new Date()).getTime();

    titleElement.current.value = '';
    bodyTextElement.current.value = '';
    reactionsElement.current.value = '';
    tagsElement.current.value = '';
    addPostList(title, bodyText, reactions, tags, uniqId);

  };

  return(
    <>
      <form onSubmit={handleClickAddBtn} className="create-post">
        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">Title</label>
          <input ref={titleElement} type="text" className="form-control" id="exampleInputTitle" placeholder="Enter Title" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputBodyText" className="form-label">Content</label>
          <textarea rows={5} ref={bodyTextElement} type="text" className="form-control" id="exampleInputBodyText" placeholder="Enter Body Text" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputReactions" className="form-label">Reactions</label>
          <input ref={reactionsElement} type="number" className="form-control" id="exampleInputReactions" required/>
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