import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Massage from "./Massage";
import Loder from "./Loder";
import { useLoaderData } from "react-router-dom";

const PostList = () =>{
  const postList = useLoaderData();
  
  return(
    <>
      {postList.length === 0 && <Massage/>}
      {postList.map((post)=>(
        <Post key={post.id} post={post}/>
      ))};
    </>
  )
};

export const PostLoder = () =>{
  return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data)=>{ 
      return data.posts;
    });
};

export default PostList;