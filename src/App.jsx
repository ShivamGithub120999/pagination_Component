/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Post from './components/Post'
import Pagination from "./components/Pagination"

const App = () => {
  const [posts,setPosts] = useState([]);
  const [postsPerPage,SetPostsPerPage] = useState(10);
  const [pageNumber,setPageNumber] = useState(1);
  useEffect(() => {
        const fetchPosts = async () => {
          
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchPosts();
      }, [])

  console.log("posts",posts);
  let lastIndex = pageNumber * postsPerPage;
  let firstIndex = lastIndex - postsPerPage;
  let currentPosts = posts.slice(firstIndex,lastIndex);

  const handlePagination = (item) => {
    return(
      setPageNumber(item)
    )
  }
  return (
    <div>
      <Post posts={currentPosts}/>
      <Pagination postsPerPage={postsPerPage} length={posts.length} handlePagination={handlePagination} currentPage={pageNumber}/>
    </div>
  )
}

export default App

// import { useEffect, useState } from 'react'
// import Post from './components/Post';
// import Pagination from './components/Pagination';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPge, SetPostsPerPage] = useState(10);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         setPosts(data);
//         setLoading(false)
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchPosts();
//   }, [])

//   const indexOfLastPost = currentPage * postsPerPge;
//   const indexOfFirstPost = indexOfLastPost - postsPerPge;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   const handlePagination = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   }

//   console.log("indexOfLastPost,indexOfFirstPost,currentPosts",indexOfLastPost,indexOfFirstPost,currentPosts);
//   return (
//     <div className='container'>
//       <Post posts={currentPosts} loading={loading} />
//       <Pagination length={posts.length} postsPerPage={postsPerPge} handlePagination={handlePagination} currentPage={currentPage} />
//     </div>
//   )
// }

// export default App


