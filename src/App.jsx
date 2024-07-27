import './App.css';

import {Route, Routes } from 'react-router-dom';
// import Footer from './Components/Footer';
// import HomeLayout from './Layouts/HomeLayout';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
function App() {

  return (
   <>
   <Routes>
   <Route path = "/" element= {<HomePage/>} ></Route>
   <Route path="/about" element = {<AboutUs/>}></Route>

   <Route path="*" element={<NotFound/>} ></Route>

   </Routes>
   {/* <Footer/> */}
   {/* <HomeLayout/> */}
   </>
  );
}



export default App
