import React ,{useState ,useEffect }from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentLists from './CommentLists'

function PostList() {
    const [posts,setPost] = useState([])

    const fetchPost = async()=>{
        try {
            const res = await axios.get("http://localhost:4040/posts");
            console.log(res.data,"here is res")
            setPost(res.data)
        } catch (error) {
            console.log(error.message,"fetch error")
        }
    }

useEffect(()=>{
    fetchPost();

},[setPost])

const handleCommentCreated = () => {
    fetchPost();
  };
  const renderedPosts = Object.values(posts).map((post) => (
    <div className="w-full p-4" key={post.id}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h3>
          <h6>{post.blogContent}</h6>
          <hr className="my-4 border-gray-300" />
          <h6 className="text-lg font-semibold text-gray-700 mb-4">Comments</h6>
          <CommentLists postId={post.id} />
          <CommentCreate postId={post.id} onCommentCreated={handleCommentCreated} />
        </div>
      </div>
    </div>
  ));
  
  return <div className="space-y-4">{renderedPosts}</div>;
  }  

export default PostList
