import { createContext, useReducer } from 'react';

export const PostListContext = createContext({
  postList: [],
  addPostList: ()=>{},
  addInitialPost: ()=>{},
  deletePostList: ()=>{},
});

const postListReducer = (currPostList, action) =>{  
  let newPostList = currPostList;

  if(action.type === "NEW_POST"){
    newPostList = [action.payload, ...currPostList];
  } else if(action.type === "INITIAL_POST"){        
    newPostList = action.payload.posts;
  } else if(action.type === "DELETE_POST"){
    newPostList = currPostList.filter((post)=> post.id !== action.payload.id );
  };
  return newPostList;
};

const PostListProvider = ({children}) =>{

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPostList = (title, bodyText, reactions, tags, id) =>{    
    dispatchPostList({
      type: "NEW_POST",
      payload: {
        id: id,
        title: title,
        body: bodyText,
        reactions: reactions,
        tags: tags,
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

  const deletePostList = (id) =>{    
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id: id,
      }
    });
  };

  return(
    <>
      <PostListContext.Provider
        value={{
          postList: postList,
          addPostList: addPostList,
          addInitialPost: addInitialPost,
          deletePostList: deletePostList,
        }}
      >
        {children}
      </PostListContext.Provider>
    </>
  )
};
export default PostListProvider;
