import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Details from './Components/Details';
import {  useState } from 'react';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import store from './Components/redux/store';
import Cart from './Components/Cart';
import About from './Components/About';
import Contact from './Components/Contact';




function App() {
  const [query, setQuery] = useState("")

  return (
    <div className="App">
      <Provider store={store}>
          <BrowserRouter>
            <Nav query={query} setQuery={setQuery} />
            <Routes>
              <Route path="/" element={<Landing query={query} />} />
              <Route path="/Details/:id" element={<Details />} />
              <Route path="/cart" element={< Cart />} />
              <Route path="/about" element={< About />} />
              <Route path="/contact" element={< Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
          </Provider>
    </div>
  );
}

export default App;
