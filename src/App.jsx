import React from 'react';
import { BrowserRouter ,Router, Routes } from 'react-router-dom';
import Header from './Header/Header'
import Index from './Pages/Index'
import Toasterjs from './Pages/Toasterjs'
import Product from './Pages/Product'
import Conctact from './Pages/Conctact'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Router>
        <Routes path='/' exactelement={<Index/>}></Routes>
        <Routes path='/toasterjs' exactelement={<Toasterjs/>}></Routes>
        <Routes path='/products' exactelement={<Product/>}></Routes>
        <Routes path='/contactus' exactelement={<Conctact/>}></Routes>
      </Router>
      </BrowserRouter>


    </div>
  )
}

export default App



























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//        <p>lorem10</p>
//       </header>
//     </div>
//   );
// }

// export default App;
