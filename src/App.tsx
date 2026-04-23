import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './shared/ui/NavBar';
import Home from './views/Home';
import Cart from './views/Cart';
import ProductDetail from './views/ProductDetail';
import Footer from './shared/ui/Footer';

function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        <NavBar />

        <main className="flex-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  )
}

export default App;
