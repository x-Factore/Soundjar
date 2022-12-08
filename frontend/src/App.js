import './App.css';
import Navbar from "./components/Navbar"
import posts from './data/example-data'
import AllPosts from './components/AllPosts'
import OnePost from './components/OnePost';

function App() {
  console.log(posts);
  return (
    <div className="App">
      <Navbar />
      <AllPosts data={posts} />
    </div>
    
  );
}

export default App;
