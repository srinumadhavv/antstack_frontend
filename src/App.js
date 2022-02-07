import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Coupons from './Coupons';
import Create from './Create';
import Home from './Home';
import Validate from './Validate';

const App = () => {
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/coupons' element={<Coupons/>} />
      <Route path='/validate' element={<Validate/>} />
      <Route path='/create' element={<Create/>} />
    </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
