import './App.css';
import Home from './Home';
import Certs from './Certs';
import Projects from './Projects';
import Blog from './Blog'; 
import BlogPost from './BlogPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/certifications" element={<Certs/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          <Route exact path="/blog/:slug" element={<BlogPost/>}/>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
