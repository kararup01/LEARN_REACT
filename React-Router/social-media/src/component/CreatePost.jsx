import { Form, redirect } from "react-router-dom";

const CreatePost = () =>{

  // const {addPostList} = useContext(PostListContext);
  return(
    <>
      <Form  className="create-post" method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputUserId" className="form-label">UserId</label>
          <input name="userId" type="text" className="form-control" id="exampleInputUserId" placeholder="User Id" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">Title</label>
          <input name="title" type="text" className="form-control" id="exampleInputTitle" placeholder="Enter Title" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputBodyText" className="form-label">Content</label>
          <textarea rows={5} name="body" type="text" className="form-control" id="exampleInputBodyText" placeholder="Enter Body Text" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLikes" className="form-label">Likes</label>
          <input name="reactions.likes" type="number" className="form-control" id="exampleInputLikes" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDislikes" className="form-label">Dislikes</label>
          <input name="reactions.dislikes" type="number" className="form-control" id="exampleInputDislikes" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputTags" className="form-label">Tags</label>
          <input name="tags" type="text" className="form-control" id="exampleInputTags" placeholder="Enter tag using space" required/>
        </div>
        <button className="btn btn-primary" type="submit">Post</button>
      </Form>
    </>
  )
};

export async function createPostAction(Data) {
  const formData = await Data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => {
      console.log(post);
      
    }); 

  return redirect("/")

};  

export default CreatePost;