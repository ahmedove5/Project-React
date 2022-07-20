import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nvbar from './component/Nvbar';
import Footer from './component/Footer';
import Home from './component/Home';
import Login from './component/Login';
import AddIdaea from './component/AddIdaea';
import Ideas from './component/Ideas';

function App() {
  return (
    <div className="App">
      <Router>
        <Nvbar/>
        


        <Routes>
         
          <Route>
          <Route path="/" element={<Home/> }></Route>
          <Route path="/Login" element={<Login/> }></Route>
          <Route path="/AddIdaea" element={<AddIdaea/> }></Route>
          <Route path="/Ideas" element={<Ideas/> }></Route>

          </Route>
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
