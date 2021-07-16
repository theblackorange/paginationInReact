import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Post } from './Components/Post';
import { Pagination } from './Components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
      setLoading(false);
      setPosts(res.data);
    }
    fetchPosts();
  },[])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFistPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost);

  
  const paginate = (number) => {
    setCurrentPage(number);
  }

  return (
    <div className="container">
      <h1 className="text-primary mb-10 mt-10">My Blog</h1>
      <Post posts={currentPosts} loading={loading}/>
      <Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={posts.length}/>
    </div>
  );
}

export default App;
