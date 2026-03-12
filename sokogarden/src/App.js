import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import MpesaPayment from './components/MpesaPayment';

function App() {
  
  return (
    <Router>
    
    <div className="App">
      <header className="App-header">
      <h1 className='text-success'>Sokogarden-Buy and sell online</h1>

      </header>
      <nav>
        
      <Link to="/signup" className='btn btn-dark text-white m-3'>Sign Up </Link>
      <Link to="/signin" className='btn btn-dark text-white m-3'>Sign In</Link>
      <Link to="/getproducts" className='btn btn-dark text-white m-3'>Get Products</Link>
      <Link to="/addproducts" className='btn btn-dark text-white m-3'>Add Products</Link>
      </nav>

      <Routes>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/addproducts' element={<AddProducts/>}></Route>
        <Route path='/getproducts' element={<GetProducts/>}></Route>
        <Route path='/mpesapayment' element={<MpesaPayment/>}></Route>
        
      </Routes>
        
    </div>
  </Router>
  );
}

export default App;
