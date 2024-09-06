import React,{useState} from 'react'
import axios from 'axios';

function PostCreate() {

  const [title, settitle] = useState('')
  const [blogContent, setBlogConent] = useState('')


  const onsubmit= async(e)=>{
    e.preventDefault();
    console.log("helo")
    await axios.post('http://localhost:4040/posts',{
        title,blogContent
    });

    settitle('')
    setBlogConent('')
  }

  return (<div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
  <form onSubmit={onsubmit}>
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-1">
        Title
      </label>
      <input
        id="title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Enter the title"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="content" className="block text-gray-700 text-sm font-medium mb-1">
        Content
      </label>
      <input
        id="content"
        value={blogContent}
        onChange={(e) => setBlogConent(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Enter the content"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-150"
    >
      Submit
    </button>
  </form>
</div>


  );
  
}

export default PostCreate
