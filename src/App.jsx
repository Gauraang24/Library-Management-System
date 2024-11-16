import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import BrowseBook from "./pages/BrowseBook";
import BookDetail from "./pages/BookDetail";
import Layout from './layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBook />} />
          <Route path="/details" element={<BookDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
