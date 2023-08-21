import React from 'react';
import {Routes, Route} from 'react-router-dom'// You can modify or create this CSS file as needed
import Main from './pages/Main';
import Cat from './pages/Category'
import Info from './pages/info';
import Movies from './pages/Entertainment'
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path="/categories" element={<Cat/>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path="/entertainment" element={<Movies/>}/>
      </Routes>
    </>
  );
}

export default App;
