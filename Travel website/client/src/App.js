
import './App.css';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import BookRide from './components/BookRide';
import ProvideService from './components/ProvideService';
function App() {
  return (
    <div className="App">
      
<BrowserRouter>

<Routes>
  <Route path='/About' element={<About/>}></Route>
  <Route path='/Gallery' element={<Gallery/>}></Route>
  <Route path='/Contact' element={<Contact/>}></Route>
  <Route path='/ProvideService' element={<ProvideService/>}></Route>
  <Route path='/BookRide' element={<BookRide/>}></Route>
  <Route path="/" element={<Home/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
