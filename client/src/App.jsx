import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostCreate from './Components/PostCreate'
import PostList from './Components/PostList'
function App() {

  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Create Post
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <PostCreate />
        </div>
  
        <hr className="my-8 border-gray-300" />
  
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Posts
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <PostList />
        </div>
      </div>
    </>
  );
  }  

export default App
