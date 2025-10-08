import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

const Post = ({post}) =>{
  const {deletePostList} = useContext(PostListContext);

  return(
    <>
      <div className="card post-card" style={{ width: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <MdDelete onClick={()=>deletePostList(post.id)}/>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          <p className="card-text">This post dislikes by {post.reactions.dislikes} peoples and likes by {post.reactions.likes} peoples</p>
          {post.tags.map((tag)=>(           
            <button key={tag} type="button" className="btn btn-primary btn-margin">{tag}</button>
          ))}
        </div>
      </div>
    </>
  )
};
export default Post;