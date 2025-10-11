import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Massage from "./Massage";
import Loder from "./Loder";

const PostList = () =>{
  const {postList, fetching} = useContext(PostListContext);
  
  return(
    <>
      {fetching && <Loder/>} 
      {!fetching && postList.length === 0 && <Massage/>}
      {!fetching && postList.map((post)=>(
        <Post key={post.id} post={post}/>
      ))};
    </>
  )
};
export default PostList;