import Header from './container/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import ProductListing from './container/ProductListing';
import ProductDetails from './container/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<ProductListing/>} />
              <Route path="/product/:productId" element={<ProductDetails/>} />
              <Route path="*">404 Not Found!</Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
