import React,{useState} from 'react'
import axios from 'axios'

function CommentCreate({postId ,onCommentCreated}) {

    const [content,setContent] = useState('')

    const submitHandler = async(e)=>{
        console.log("heheheheheeodkalnadklvakdlvkals")
        e.preventDefault()

        try {
            console.log("kkkk")
            await axios.post(`http://localhost:4041/posts/${postId}/comments`,{
                content
            })
            console.group("done the .............................................................................................................................................................................................................")
            setContent('')
            onCommentCreated()
            
        } catch (error) {
            console.log(error.messge)
        }
    }

      return (
        <div className="bg-white shadow-md rounded-lg p-6">
        <div className="p-4">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label htmlFor="content" className="block text-gray-700 text-sm font-medium mb-2">
                Add Comment
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                  placeholder="Write your comment here..."
                />
                <button
                  type="submit"
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
        )
}

export default CommentCreate
