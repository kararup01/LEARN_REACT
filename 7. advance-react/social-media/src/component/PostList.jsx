import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Massage from "./Massage";
import LodingSpinner from "./lodingSpinner";

const PostList = () =>{
  const {postList, addInitialPost} = useContext(PostListContext);
  // const [getpostData, setGetPostData] = useState(false);
  const [fetching, setFetching] = useState(false);

  useEffect(()=>{
    setFetching(true);

    const controlar = new AbortController();
    const signal = controlar.signal;

    fetch('https://dummyjson.com/posts', {signal})
    .then(res => res.json())
    .then((data)=>{ 
      addInitialPost(data.posts)
      setFetching(false)
    });

    return () =>{
      console.log("Cleaning up useEffect");
      controlar.abort(); 
    }
  }, []);
  

  return(
    <>
      {fetching && <LodingSpinner/>}
      {!fetching && postList.length === 0 && <Massage />}
      {!fetching && postList.map((post)=>(
        <Post key={post.id} post={post}/>
      ))};
    </>
  )
};
export default PostList;