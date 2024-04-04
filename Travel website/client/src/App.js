
import './App.css';
import About from './components/About';
import Protected from './components/Protected';
import Contact from './components/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import BookRide from './components/BookRide';
import ProvideService from './components/ProvideService';
import Signup from './components/Signup';
import Login from './components/Login';
import Bookings from './components/Bookings';
function App() {
  return (
    <div className="App">
      
<BrowserRouter>

<Routes>
  <Route path='/About' element={<About/>} ></Route>
  <Route path='/Bookings' element={<Protected Component={Bookings}/>}> </Route>
  <Route path='/Contact' element={<Contact/>}></Route>
  <Route path='/ProvideService' element={<Protected  Component={ProvideService}/>}></Route>
  <Route path='/BookRide' element={<Protected Component={BookRide}/>}></Route>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/Signup" element={<Signup/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
