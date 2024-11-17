import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import BrowseBook from "./pages/BrowseBook";
import BookDetail from "./pages/BookDetail";
import Layout from './layout/Layout';
import AddBook from './pages/AddBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/browse/:category" element={<BrowseBook />} />
          <Route path="/details/:id" element={<BookDetail />} />
          <Route path="/add" element={<AddBook />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
