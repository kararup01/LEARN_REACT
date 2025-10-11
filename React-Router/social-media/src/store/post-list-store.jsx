import {
  createContext, 
  useEffect, 
  useReducer, 
  useState 
} from 'react';

export const PostListContext = createContext({
  postList: [],
  fetching: false,
  addPostList: ()=>{},
  deletePostList: ()=>{},
});

const postListReducer = (currPostList, action) =>{  
  
  let newPostList = currPostList;

  if(action.type === "NEW_POST"){
    newPostList = [action.payload.post, ...currPostList];
  } else if(action.type === "INITIAL_POST"){        
    newPostList = action.payload.posts;
  } else if(action.type === "DELETE_POST"){
    newPostList = currPostList.filter((post)=> post.Id !== action.payload.Id );
  };
  return newPostList;
};

const PostListProvider = ({children}) =>{

  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPostList = (post) =>{    
    dispatchPostList({
      type: "NEW_POST",
      payload: {
        post
      }
    });
  };

  const addInitialPost = (posts) =>{   
    dispatchPostList({
      type: "INITIAL_POST",
      payload: {
        posts
      }
    });
  };

  const deletePostList = (Id) =>{    
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        Id: Id,
      }
    });
  };

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
      controlar.abort(); 
    }
  }, []);

  return(
    <>
      <PostListContext.Provider
        value={{
          postList: postList,
          fetching: fetching,
          addPostList: addPostList,
          deletePostList: deletePostList,
        }}
      >
        {children}
      </PostListContext.Provider>
    </>
  )
};
export default PostListProvider;


