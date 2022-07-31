import Navbar from './Navbar';
import Blogs from './Blogs';
import BlogList from './BlogList'
import Create from './Create'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './NotFound';

function App() {

  return (
    <section className="components">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogList />} />
          <Route path='/create' element={<Create />} />
          <Route path='/create' element={<Create />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </section>

  )
}

export default App;
