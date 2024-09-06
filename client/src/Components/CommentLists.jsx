import React , {useState ,useEffect} from 'react'
import './style.css'
import axios from 'axios'

function CommentLists({postId}) {
    const [comments,setComments]=useState([])


    const fetchData = async ()=>{
        const res = await axios.get(`http://localhost:4041/posts/${postId}/comments`)
        console.log(res.data,comments)
        setComments(res.data)
    }
    useEffect(()=>{
        fetchData()
    },[])


    const renderedComments = comments.map((comment) => {
        return (
          <div key={comment.id} className="bg-gray-100 p-4 mb-4 rounded-lg shadow-sm">
            <li className="text-gray-800">{comment.content}</li>
          </div>
        );
      });
      
      return <ul className="space-y-4">{renderedComments}</ul>;
      
    
}

export default CommentLists
