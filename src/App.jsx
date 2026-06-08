import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NewsMedia from './pages/NewsMedia';
import ArticleDetail from './pages/ArticleDetail';
import Career from './pages/Career';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<NewsMedia />} />
          <Route path="news/:id" element={<ArticleDetail />} />
          <Route path="career" element={<Career />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
