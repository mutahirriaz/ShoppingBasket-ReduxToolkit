import React from 'react';
import './App.css';
// import ShoppingBasket from './pages/index'
import Product from './components/Product/Product'
import ViewItem from './components/CartItem/viewItem'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (

    <div className="App">
 
          <BrowserRouter>
          <Header/>
          
          <Routes>
            <Route path='/' element={<Home/>} />
            
            <Route path='/product' element={<Product/>} />
            <Route path='/item' element={<ViewItem />} />
          </Routes>
          <Footer />
          </BrowserRouter>

    </div>
  );
}

export default App;
