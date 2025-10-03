import { createContext, useReducer } from 'react';

export const PostListContext = createContext({
  postList: [],
  addPostList: ()=>{},
  deletePostList: ()=>{},
});

const postListReducer = (currPostList, action) =>{  
  let newPostList = currPostList;

  if(action.type === "NEW_POST"){
    newPostList = [action.payload, ...currPostList];
  } else if(action.type === "DELETE_POST"){
    newPostList = currPostList.filter((post)=> post.Id !== action.payload.Id );
  };
  return newPostList;
};

const PostListProvider = ({children}) =>{

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPostList = (title, bodyText, reactions, tags, Id) =>{    
    dispatchPostList({
      type: "NEW_POST",
      payload: {
        Id: Id,
        title: title,
        body: bodyText,
        reactions: reactions,
        tags: tags,
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

  return(
    <>
      <PostListContext.Provider
        value={{
          postList: postList,
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

const DEFAULT_POST_LIST = [
  {
    Id: '001',
    title: "Going to Delhi",
    body: "Hi Friends, I am going to Delhi for my vacation. Hope to enjoy a lot. peace out.",
    reactions: 5,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoying"],
  },
  {
    Id: '002',
    title: "Go to gym",
    body: "Hi Friends, I am going to gym for my body fitness. Hope to enjoy a lot. peace out.",
    reactions: 6,
    userId: "user-5", 
    tags: ["body", "gym", "enjoying"],
  },
]

